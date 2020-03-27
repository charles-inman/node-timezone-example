import React, {useState, useEffect} from "react";
import fetch from 'isomorphic-unfetch';
import {connect} from 'react-redux';
import Wrapper from "../src/components/primary/layout/wrapper";
import Meta from '../src/components/primary/meta';
import Table from "./../src/components/primary/table"
import DemoSearch from './../src/services/demo';
import Transpiler, {updateCurrentTime} from '../src/utils/transpile';
import {getTableControl} from "../src/redux/selectors";

const Index = ({initialTimezones = [], tableControl}) => {

    const [tableNames] = useState(tableControl);
    const [timezones, setTimezones] = useState(initialTimezones);
    const [query, setQuery] = useState('');
    const [isError, setIsError] = useState(false);

    useEffect(() => {

        const fetchData = async () => {
            setIsError(false);

            try {

                const result = await DemoSearch(query);

                setTimezones(Transpiler(result.data));

            } catch (error) {
                setIsError(true);
            }
        };

        fetchData();
    }, [query])

    useEffect(() => {

        const updateTimesLive = setInterval(() => {

            setTimezones(updateCurrentTime(timezones));

        }, 1000);

        return () => clearInterval(updateTimesLive);
    });

    const updateQuery = (e) => {
        const search = e.target.value;

        if(search === '') {
            setTimezones([]);
        }

        setQuery(search);
    }

    return <Wrapper>
        <Meta />

        <form className={'search-box'}>
            <label >Search</label>
            <input placeholder={'Enter a location'} value={query} onInput={updateQuery} onChange={updateQuery} />
            {isError && <div className='error'>Something went wrong ...</div>}
        </form>

        <Table tableNames={tableNames}
                data={timezones}/>
    </Wrapper>;
}

Index.getInitialProps = async ctx => {
    try {
        const res = await fetch(`http://${process.env.SERVER || 'localhost'}:4000/all`);

        const json = await res.json();
        return { initialTimezones: Transpiler(json) }
    }
    catch (e) {
        return { initialTimezones: [] }
    }
}

const mapStateToProps = state => ({
    tableControl: getTableControl(state)
});

export default connect(mapStateToProps, null)(Index);