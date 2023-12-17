import moment from "moment";

const trackTimeConverter = (seconds: number): string => moment.utc(	seconds * 1000).format('mm:ss')

export default trackTimeConverter;