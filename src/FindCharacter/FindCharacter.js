
// Write a react component that takes a string prop and displays
// the second character after the first instance of the string
// 'sunil' .Display 'Not found ' if not found.

function FindCharacter() {
    
    const findSecondCharacter = () => {

        const str = "Thissunil is test sunil this";
        const searchString = 'sunil';
        const index  = str.indexOf(searchString);
        console.log(str.length)

        if(index !== -1 && index + searchString.length + 1 < str.length) {
            return str[index + searchString.length + 1];
        } else {
            return 'Not Found'
        }

    }

    return (
        <>
            <div>
                <p>second Character : {findSecondCharacter()}</p>
            </div>
        </>
    )
}

export default FindCharacter;
