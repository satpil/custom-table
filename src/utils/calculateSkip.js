export const paginationValue = (event,entryCount) => {
    let skipCal = event * entryCount   /** Here EntryCount is given by entry dropdown */
    return skipCal;
}