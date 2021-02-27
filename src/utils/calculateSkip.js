function PaginationValue (props){
    const {event,entryCount} = props;
    let skipCal = event * entryCount   /** Here EntryCount is given by entry dropdown */
    return skipCal;
}
export default PaginationValue;