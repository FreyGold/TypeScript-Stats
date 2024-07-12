"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (date) => {
    const splitedDate = date.split('/');
    const day = Number(splitedDate[0]);
    const month = Number(splitedDate[1]) - 1;
    const year = Number(splitedDate[2]);
    return new Date(year, month, day);
};
exports.dateStringToDate = dateStringToDate;
