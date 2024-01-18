export default function classNames(...names) {
    let str = "";
    for(let i = 0; i < names.length; i++) {
        str += names[i] + " ";
    }
    return str;
}