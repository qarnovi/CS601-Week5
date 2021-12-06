async function fetchMyDegrees() {
    await fetch('./src/degrees.json')
    .then((response) => {
        let data = response.json()
        if(response.status === 200){
            document.write('Response status is: ' + response.status);
        }
    })
    .then((data) => {
        let index = 1;
        for (const degree of data.degrees){
            document.write(
                index + '. ${degree.type} degree in ${degree.major} from ${degree.school}, ${degree.year_conferred}'
            )
            index++;
        }
    })
}