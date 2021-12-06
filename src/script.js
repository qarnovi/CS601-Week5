async function fetchMyDegrees() {
    await fetch('./src/degrees.json')
    .then((response) => 
        response.json()
    )
    .then(data => {
        document.write(data.toString() + '\n')
        let index = 1;
        for (const degree in data.degrees){
            document.write(degree.toString() + '\n')
            document.write(
                index + '. ${degree.type} degree in ${degree.major} from ${degree.school}, ${degree.year_conferred} \n'
            )
            index++;
        }
    })
}