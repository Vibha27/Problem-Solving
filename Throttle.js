function throttle(cb, d) {
    let last =0;

    return () => {
        let now = new Date().getTime();

        if (now-last <= d) return
        last = now;
        return cb()
    }
}