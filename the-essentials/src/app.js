const root = document.getElementById("root")

// pada contoh ini yang di render secara uptude pada <p>{new Date().toLocaleString()}</p> element lain seperti
function tick() {
    const element = (
        <>
            <h1>jam sekarang</h1>
            <p>{new Date().toLocaleString()}</p>
            <p>pada contoh ini yang di render hanya pada <p>new Date().toLocaleString()</p> element lain seperti tidak dirender</p>
        </>
    )
    // render
    ReactDOM.render(element, root)
}

setInterval(tick, 1000)

