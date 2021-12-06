function fetchMyDegrees() {
    await fetch('./src/degrees.json')
    .then((response) => {
        let data = response.json()
        if(response.status === 200){
            let index = 1;
            data.degrees.forEach(element => {
                document.write(
                    index + '. ${element.type} degree in ${element.major} from ${element.school}, ${element.year_conferred}'
                )
                index++;
            });
        }
    })
}