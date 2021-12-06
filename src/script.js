async function fetchMyDegrees() {
    await fetch('./src/degrees.json')
    .then((response) => {
        if(response.status === 200){
            document.write('Response status is: ' + response.status);
        }
    },
    response.json())
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