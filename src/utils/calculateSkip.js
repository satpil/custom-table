
function PaginationValue (event,entryCount){
    let skipCal = event * entryCount   /** Here EntryCount is given by entry dropdown */
    return skipCal;
}
export default PaginationValue;