class Animal {
  constructor(species, name, size, location, image) {
    this.species = species;
    this.name = name;
    this.size = size;
    this.location = location;
    this.image = image;
  }
}

class BigCats {
  constructor() {
    this.animals = [];
  }

  // add
  addAnimal(animal) {
    if (
      this.animals.some((existingAnimal) => existingAnimal.name === animal.name)
    ) {
      alert("Animal already Exists!!!");
      return;
    }
    this.animals.push(animal);
    this.render();
  }

  // edit
  editAnimal(name, updatedAnimal) {
    const index = this.animals.findIndex((animal) => animal.name === name);
    if (index !== -1)// if the index exists//
     {
      const updatedName =
        prompt("Name:", this.animals[index].name) || this.animals[index].name;
      const updatedSize =
        prompt("Enter Size:", this.animals[index].size) ||
        this.animals[index].size;
      const updatedLocation =
        prompt("Enter Location:", this.animals[index].location) ||
        this.animals[index].location;
      const updatedImage =
        prompt("Image URL:", this.animals[index].image) ||
        this.animals[index].image;

      const updatedAnimal = new Animal(
        this.animals[index].species,
        updatedName,
        updatedSize,
        updatedLocation,
        updatedImage
      );

      this.animals[index] = updatedAnimal;
      this.render();
    }
  }

  // remove
  deleteAnimal(name) {
    this.animals = this.animals.filter((animal) => animal.name !== name);
    this.render();
  }

  sortAnimals(field) {
    if (field === "size") {
      this.animals.sort((a, b) => parseFloat(a.size) - parseFloat(b.size)); //sorting in decending order
    } else {
      this.animals.sort((a, b) => a[field].localeCompare(b[field])); // sorts on basis of alphabets
    }
    this.render();
  }

  render() {
    const container = document.getElementById("bigCatsCards");
    container.innerHTML = "";

    const sortOptions = `
      <div class= "m-4">
        <button type="button" class="btn btn-outline-primary" onclick="bigCats.sortAnimals('species')">Sort by Species</button>
        <button type="button" class="btn btn-outline-primary" onclick="bigCats.sortAnimals('name')">Sort by Name</button>
        <button  type="button" class="btn btn-outline-primary" onclick="bigCats.sortAnimals('size')">Sort by Size</button>
        <button type="button" class="btn btn-outline-primary" onclick="bigCats.sortAnimals('location')">Sort by Location</button>
      </div>
    `;
    container.innerHTML = sortOptions + container.innerHTML;

    this.animals.forEach((animal) => {
      const card = document.createElement("div");
      card.classList.add("card", "col-md-6", "mb-4");
      card.style = "border: 1px solid #000; padding: 20px;";
      card.innerHTML = `
        <p>Species: ${animal.species}</p>
        <p>Name: ${animal.name}</p>
        <p>Size: ${animal.size}</p>
        <p>Location: ${animal.location}</p>
        <img src="${animal.image}" class="animal-image" alt="${animal.name}" />
        <div class="p-4">
          <button class="btn btn-warning" onclick="bigCats.editAnimal('${animal.name}', new Animal('${animal.species}', 'Updated ${animal.name}', '${animal.size}', '${animal.location}', '${animal.image}'))">Edit</button>
          <button class="btn btn-danger" onclick="bigCats.deleteAnimal('${animal.name}')">Delete</button>
        </div>
      `;
      container.appendChild(card);
    });
  }
}

class Dogs extends BigCats {
  constructor() {
    super();
  }

  render() {
    const container = document.getElementById("dogsCards");
    container.innerHTML = "";

    const sortOptions = `
      <div class="m-4">
        <button type="button" class="btn btn-outline-primary" onclick="dogs.sortAnimals('name')">Sort by Name</button>
        <button type="button" class="btn btn-outline-primary" onclick="dogs.sortAnimals('location')">Sort by Location</button>
      </div>
    `;
    container.innerHTML = sortOptions + container.innerHTML;

    this.animals.forEach((animal) => {
      const card = document.createElement("div");
      card.classList.add("card", "col-md-6", "mb-4");
      card.style = "border: 1px solid #000; padding: 20px;";
      card.innerHTML = `
        <p>Species: ${animal.species}</p>
        <p>Name: <span class="animal-name-bold">${animal.name}</span></p>
        <p>Size: ${animal.size}</p>
        <p>Location: ${animal.location}</p>
        <img src="${animal.image}" class="animal-image" alt="${animal.name}" />
        <div class="p-4">
          <button class="btn btn-warning" onclick="dogs.editAnimal('${animal.name}', new Animal('${animal.species}', 'Updated ${animal.name}', '${animal.size}', '${animal.location}', '${animal.image}'))">Edit</button>
          <button class="btn btn-danger" onclick="dogs.deleteAnimal('${animal.name}')">Delete</button>
        </div>
      `;
      container.appendChild(card);
    });
  }
}
class BigFish extends BigCats {
  constructor() {
    super();
  }

  render() {
    const container = document.getElementById("bigFishCards");
    container.innerHTML = "";

    const sortOptions = `
      <div class="m-4">
        <button type="button" class="btn btn-outline-primary" onclick="bigFish.sortAnimals('size')">Sort by Size</button>
      </div>
    `;
    container.innerHTML = sortOptions + container.innerHTML;

    this.animals.forEach((animal) => {
      const card = document.createElement("div");
      card.classList.add("card", "col-md-6", "mb-4");
      card.style = "border: 1px solid #000; padding: 20px;";
      card.innerHTML = `
        <p>Species: ${animal.species}</p>
        <p>Name: <span class="animal-name-bold-blue">${animal.name}</span></p>
        <p>Size: ${animal.size}</p>
        <p>Location: ${animal.location}</p>
        <img src="${animal.image}" class="animal-image" alt="${animal.name}" />
        <div class="p-4">
          <button class="btn btn-warning" onclick="bigFish.editAnimal('${animal.name}', new Animal('${animal.species}', 'Updated ${animal.name}', '${animal.size}', '${animal.location}', '${animal.image}'))">Edit</button>
          <button class="btn btn-danger" onclick="bigFish.deleteAnimal('${animal.name}')">Delete</button>
        </div>
      `;
      container.appendChild(card);
    });
  }
}

// instantiation
const bigCats = new BigCats();
const dogs = new Dogs();
const bigFish = new BigFish();

// adding data
bigCats.addAnimal(
  new Animal("Big Cats", "Tiger", "10 ft", "Asia", "../asset/tiger.png")
);
bigCats.addAnimal(
  new Animal("Big Cats", "Lion", "8 ft", "Africa", "../asset/lion.png")
);
bigCats.addAnimal(
  new Animal(
    "Big Cats",
    "Leopard",
    "5 ft",
    "Africa and Asia",
    "../asset/leopard.jpg"
  )
);
bigCats.addAnimal(
  new Animal("Big Cats", "Cheetah", "5 ft", "Africa", "../asset/cheetah.png")
);
bigCats.addAnimal(
  new Animal("Big Cats", "Caracal", "3 ft", "Africa", "../asset/caracal.png")
);
bigCats.addAnimal(
  new Animal("Big Cats", "Jaguar", "5 ft", "../asset/unnamed.png.png")
);

dogs.addAnimal(
  new Animal("Dog", "Rotwailer", "2 ft", "Germany", "../asset/Rotwailer.png")
);
dogs.addAnimal(
  new Animal(
    "Dog",
    "German Shepherd",
    "2 ft",
    "Germany",
    "../asset/German Shepherd.png"
  )
);
dogs.addAnimal(
  new Animal("Dog", "Labrodar", "2 ft", "UK", "../asset/Labrodar.png")
);
dogs.addAnimal(
  new Animal("Dog", "Alabai", "4 ft", "Turkey", "../asset/Alabai.png")
);

bigFish.addAnimal(
  new Animal(
    "Big Fish",
    "Humpback Whale",
    "15 ft",
    "Atlantic Ocean",
    "../asset/Humpback Whale.png"
  )
);
bigFish.addAnimal(
  new Animal(
    "Big Fish",
    "Killer Whale",
    "12 ft",
    "Atlantic Ocean",
    "../asset/Killer Whale.png"
  )
);
bigFish.addAnimal(
  new Animal(
    "Big Fish",
    "Tiger Shark",
    "8 ft",
    "Ocean",
    "../asset/Tiger Shark.png"
  )
);
bigFish.addAnimal(
  new Animal(
    "Big Fish",
    "Hammerhead Shark",
    "8 ft",
    "Ocean",
    "../asset/Hammerhead Shark.png"
  )
);
