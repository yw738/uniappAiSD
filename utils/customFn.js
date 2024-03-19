import { levelList, strengTypeList, findColor, findLabel } from "./meun.js";

/**
 * 获取当前时间
 * 2021-01-01 00:00:00
 * @param {boolean} isHasHMS是否要包含时分秒
 */
export const getTime = (isHasHMS = false) => {
    const time = new Date();
    const year = time.getFullYear();
    let month = time.getMonth() + 1; //月份是从0开始的
    let day = time.getDate();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    month = month.toString().padStart(2, "00"); //补0
    day = day.toString().padStart(2, "00");
    h = h.toString().padStart(2, "00");
    m = m.toString().padStart(2, "00");
    s = s.toString().padStart(2, "00");
    if (isHasHMS) {
        return `${year}-${month}-${day} ${h}:${m}:${s}`;
    } else {
        return `${year}-${month}-${day}`;
    }
};

/**
 * 通过id 解析name
 */
export const filterName = (str = "T4_CAPE_ASF@1") => {
    let level = str.match(new RegExp(/T[0-9]/g))[0];
    let levelName = findLabel(level, levelList);
    let a = str.match(new RegExp(/@[0-9]/g));
    let strengType = a ? a[0] : "";
    let strengName = findLabel(strengType, strengTypeList);
    if (strengName == "所有") strengName = "附魔等级0";
    let name = str.replace(/@[0-9]/, "").replace(/T[0-9]_/, "");
    return {
        levelName: levelName,
        strengName,
    };
};
/**
 * 时间戳 => 时间
 * @param {Number|string} timestamp 时间戳
 */
export const dateFormat = (timestamp, isHasHMS = false, isHasS = true) => {
    const time = new Date(timestamp); //先将时间戳转为Date对象，然后才能使用Date的方法
    const year = time.getFullYear();
    let month = time.getMonth() + 1; //月份是从0开始的
    let day = time.getDate();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    month = month.toString().padStart(2, "00"); //补0
    day = day.toString().padStart(2, "00");
    h = h.toString().padStart(2, "00");
    m = m.toString().padStart(2, "00");
    s = s.toString().padStart(2, "00");
    if (isHasHMS) {
        if (isHasS) {
            return `${year}-${month}-${day} ${h}:${m}:${s}`;
        } else {
            return `${year}-${month}-${day} ${h}:${m}`;
        }
    } else {
        return `${year}-${month}-${day}`;
    }
};

/**
 * 时间=>时间戳
 * @param {String} date 时间
 */
export const dateFormatNum = (date) => {
    return new Date(date).getTime();
};

/**
 * Number formatting
 * like 10000 => 10k
 * @param {number} num
 * @param {number} digits
 */
export function numberFormatter(num, digits) {
    digits = digits == null ? 2 : digits;
    const si = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "K" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "B" },
        { value: 1e12, symbol: "T" },
        { value: 1e15, symbol: "P" },
        { value: 1e18, symbol: "E" },
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let i;
    for (i = si.length - 1; i > 0; i--) {
        if (num >= si[i].value) {
            break;
        }
    }
    if (num < 1000) {
        return Number(num).toFixed(digits);
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
}

/**
 * 10000 => "10,000"
 * @param {number} num
 */
export function toThousandFilter(num) {
    return (+num || 0)
        .toString()
        .replace(/^-?\d+/g, (m) => m.replace(/(?=(?!\b)(\d{3})+$)/g, ","));
}