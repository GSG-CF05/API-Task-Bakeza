let body = document.querySelector("body")
let mainDiv = document.querySelector("#root")
body.appendChild(mainDiv);
fetch("https://hp-api.herokuapp.com/api/characters")
    .then((res) => {
        return res.json()
    }).then((data) => {
        data.forEach((ele) => {

            // ! Create Elements
            let card = document.createElement("div")
            let img = document.createElement("img")
            let charName = document.createElement("h1")
            let realName = document.createElement("h2")
            let gender = document.createElement("p")
            let dob = document.createElement("p")
            let wizard = document.createElement("p")
            let species = document.createElement("p")
            let house = document.createElement("p")

            card.setAttribute('class', 'card')
            mainDiv.appendChild(card)

            // ! Add data to the elements
            if (ele.image != "") {
                img.src = ele.image;
                card.appendChild(img)

            }
            if (ele.name != "") {
                charName.textContent = ele.name
                card.appendChild(charName)

            }
            if (ele.actor != "") {
                realName.textContent = ele.actor
                card.appendChild(realName)

            }
            if (ele.gender != "") {
                gender.textContent = "Gender : " + ele.gender
                card.appendChild(gender)

            }
            if (ele.dateOfBirth != "") {
                dob.textContent = "Date Of Birth : " + ele.dateOfBirth;
                card.appendChild(dob)

            } else if (ele.yearOfBirth != "") {
                dob.textContent = "Year Of Birth : " + ele.yearOfBirth;
                card.appendChild(dob)

            }
            if (ele.wizard != "") {
                if (ele.wizard == true) {}
                wizard.textContent = "Wizard : Yes";
                card.appendChild(wizard)

            }
            if (ele.species != "") {
                species.textContent = "Species : " + ele.species
                card.appendChild(species)

            }
            if (ele.house != "") {
                house.textContent = "House : " + ele.house;
                card.appendChild(house)

            }


        });

    }).catch(Error)