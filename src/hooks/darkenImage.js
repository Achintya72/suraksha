export default function useDarkImage(percent = "70%") {
    const styles = {
        filter: `brightness(${percent})`
    };
    return styles;
}