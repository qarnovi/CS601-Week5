async function fetchMyDegrees() {
    await fetch('./src/degrees.json')
    .then((response) => 
        response.json()
    )
    .then(data => {
        let index = 1;
        for (const degree of data.degrees){
            document.write(degree.major.toString() + '\n')
            document.write(
                index + '. ${degree.type} degree in ${degree.major} from ${degree.school}, ${degree.year_conferred} \n'
            )
            index++;
        }
    })
}