// code your solution here
// function superbowlWin([year], [result]) {
//     return (year, result === "W")
// }

superbowlWin = (record) => {
    const result = record.find(record => record.result === "W");
    return result ? result.year : undefined;
}