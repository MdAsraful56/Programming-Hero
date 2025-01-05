function checkAge(){
    const ageFild = document.getElementById('age');
    const ageText = ageFild.value;
    const errorTag = document.getElementById('error');
    try {
        // console.log(Nayma);
        const age = parseInt(ageText);
        if (isNaN(age)) {
            console.log('age not found', age, ageText);
            throw "This is a error. Do You Know Man!"
        }

    } catch (error) {
        console.log(error);
        errorTag.innerText = error;
    }
    finally{
        console.log('All Done');
    }
    console.log('Love You');
}