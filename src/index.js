const init = () => {
    const form = document.querySelector('form')
    form.addEventListener('submit', (e)=>{
        e.preventDefault()
        const input = document.querySelector('#searchByID').value
        console.log(input)
        fetch(`http://localhost:3000/movies/${input}`)
        .then(response => response.json())
        .then(movie =>{
            document.querySelector('h4').textContent=movie.title
            document.querySelector('p').textContent=movie.summary
            console.log(movie)
        })
    })
}



document.addEventListener('DOMContentLoaded', init);