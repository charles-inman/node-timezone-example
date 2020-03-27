
import moment from 'moment';

export default (data) => {
    return data.map((row) => {
        return {
            id: row.ID,
            name: row.Name,
            date: moment().add(row.Hours, 'hours').add(row.Hours, 'minutes').add(row.Secs, 'seconds'),
            dateView: moment().add(row.Hours, 'hours').add(row.Hours, 'minutes').add(row.Secs, 'seconds').format('HH:mm:ss')
        }
    });
}

export const updateCurrentTime = (data) => {
    return data.map((row) => {
        return {
            ...row,
            date: row.date.add(1, 'seconds'),
            dateView: row.date.format('HH:mm:ss')
        }
    });
}