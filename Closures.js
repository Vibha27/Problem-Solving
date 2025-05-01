function counter () {
    let count=0;
    return () => {
        count++;
        return count;
    }
}

const count = counter();
console.log(count())
console.log(count())


function debounce (fn, delay) {
    let timer;

    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay)
    }
}

const log = () => console.log("Triggered!");
const debouncedLog = debounce(log, 500);

debouncedLog(); // won't run immediately
debouncedLog(); // cancels previous
debouncedLog(); // cancels previous
setTimeout(debouncedLog, 600); // ✅ runs once after 600ms