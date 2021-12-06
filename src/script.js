async function fetchMyDegrees() {
    await fetch('./src/degrees.json')
    .then((response) => {
        let data = response.json();
        if(response.status === 200){
            document.write('Response status is: ' + response.status);
        }
        let index = 1;
        for (const degree of response.json().degrees){
            let major = degree.major.toString();
            let type = degree.type.toString();
            let school = degree.school.toString();
            let year = degree.year_conferred.toString();
            document.write(
                index + '. ' + type + ' degree in ' + major + ' from ' + school + ', ' + year + ' \n'
            )
            index++;
        }
    })
}