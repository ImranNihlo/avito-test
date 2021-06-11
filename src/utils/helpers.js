export const showCurrentDate = () => {
    let currentDate = new Date();

    const getCurrentDay = currentDate.getDate();
    const getCurrentMonth = currentDate.getMonth();
    const getCurrentYear = currentDate.getFullYear();

    currentDate = `${getCurrentDay}-${getCurrentMonth}-${getCurrentYear}`
    return currentDate;
}
