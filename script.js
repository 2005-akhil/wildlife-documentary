// ========================================
// WILDLIFE DATABASE
// ========================================

const animals = [

    // ========================================
    // MAMMALS
    // ========================================

    {
        name: "Tiger",
        category: "mammal",
        categoryName: "Mammal",
        image: "https://img.magnific.com/free-photo/tiger-looking-with-open-mouth_1150-18083.jpg",
        video: "NvcSnPdS24s",
        shortDescription: "A powerful solitary predator of Asian forests.",
        description: "The tiger is the largest living cat species. Tigers are solitary hunters that use forests, grasslands and wetlands as their habitats.",
        habitat: "Forests, grasslands and wetlands",
        diet: "Deer, wild boar and other animals",
        speed: "Up to 65 km/h",
        size: "2.5–3.9 m",
        fact: "Every tiger has a unique stripe pattern."
    },

    {
        name: "African Elephant",
        category: "mammal",
        categoryName: "Mammal",
        image: "https://live.staticflickr.com/41/114587853_cdabf6568c_o.jpg",
        shortDescription: "The largest land animal on Earth.",
        description: "African elephants are highly intelligent social animals. They live in family groups and communicate using sounds and physical signals.",
        habitat: "Savannas, forests and deserts",
        diet: "Grass, leaves, bark and fruit",
        speed: "Up to 40 km/h",
        size: "Up to 4 m tall",
        fact: "Elephants use their trunks for breathing, drinking, smelling and grabbing food."
    },

    {
        name: "Lion",
        category: "mammal",
        categoryName: "Mammal",
        image: "https://media.istockphoto.com/id/483529411/photo/big-lion-lying-on-savannah-grass.jpg?",
        shortDescription: "A social big cat living in African grasslands.",
        description: "Lions are the only big cats that commonly live in social groups called prides.",
        habitat: "Grasslands and savannas",
        diet: "Zebra, wildebeest and antelope",
        speed: "Up to 80 km/h",
        size: "Up to 2.5 m long",
        fact: "A lion's roar can be heard several kilometers away under suitable conditions."
    },

    {
        name: "Polar Bear",
        category: "mammal",
        categoryName: "Mammal",
        image: "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/66/Polar_Bear_-_Alaska_%28cropped%29.jpg/250px-Polar_Bear_-_Alaska_%28cropped%29.jpg?",
        shortDescription: "A powerful Arctic predator adapted to icy environments.",
        description: "Polar bears are specially adapted for life in the Arctic. Their thick fur and body fat help them retain heat.",
        habitat: "Arctic sea ice and coastal areas",
        diet: "Primarily seals",
        speed: "Up to 40 km/h",
        size: "Up to 2.5 m tall",
        fact: "Polar bears have black skin underneath their fur."
    },

    {
        name: "Gorilla",
        category: "mammal",
        categoryName: "Mammal",
        image: "https://assets.worldwildlife.org/www-prd/images/wwfcmsprodimagesMountain_Gor.2e16d0ba.fill-1200x630-c100.jpg",
        shortDescription: "A powerful and intelligent great ape.",
        description: "Gorillas are social primates that live in family groups led by an adult male.",
        habitat: "Tropical forests",
        diet: "Leaves, stems, fruit and plants",
        speed: "Up to 40 km/h",
        size: "Up to 1.8 m tall",
        fact: "Gorillas communicate using many different sounds and gestures."
    },

    {
        name: "Cheetah",
        category: "mammal",
        categoryName: "Mammal",
        image: "https://c.files.bbci.co.uk/75C3/production/_96974103_gettyimages-cheetah.jpg",
        shortDescription: "The fastest land animal.",
        description: "Cheetahs are specialized for short bursts of high-speed running when hunting.",
        habitat: "Grasslands and open savannas",
        diet: "Small and medium-sized mammals",
        speed: "Up to about 100 km/h",
        size: "Up to 1.4 m long",
        fact: "Cheetahs use their long tails to help balance while running."
    },

    {
        name: "Giraffe",
        category: "mammal",
        categoryName: "Mammal",
        image: "https://thumbs.dreamstime.com/b/mother-masai-giraffe-protecting-baby-newly-born-calf-its-nairobi-national-park-kenya-skyline-nairobi-seen-83752030.jpg",
        shortDescription: "The tallest living land animal.",
        description: "Giraffes use their long necks to reach leaves high above the ground.",
        habitat: "African savannas and grasslands",
        diet: "Leaves, flowers and shoots",
        speed: "Up to 60 km/h",
        size: "Up to 5.5 m tall",
        fact: "Giraffes have unique coat patterns."
    },

    {
        name: "Zebra",
        category: "mammal",
        categoryName: "Mammal",
        image: "https://www.treehugger.com/thmb/qFhPReYPPaVgTtHBOthYeMJVeZ0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1043597638-49acd69677d7442588c1d8930d298a59.jpg",
        shortDescription: "A striped African grassland animal.",
        description: "Zebras are social herbivores that often live in groups and travel across open grasslands.",
        habitat: "Grasslands and savannas",
        diet: "Grass",
        speed: "Up to 65 km/h",
        size: "Up to 1.5 m tall",
        fact: "Every zebra has a unique stripe pattern."
    },

    {
        name: "Hippopotamus",
        category: "mammal",
        categoryName: "Mammal",
        image: "https://t4.ftcdn.net/jpg/03/25/76/59/360_F_325765949_8p7suTucqzxv0omSiLRlhHaCbPRqcUxb.jpg",
        shortDescription: "A large semi-aquatic African mammal.",
        description: "Hippopotamuses spend much of their day in water and emerge to feed on vegetation.",
        habitat: "Rivers, lakes and grasslands",
        diet: "Mostly grass",
        speed: "Up to 30 km/h",
        size: "Up to 5 m long",
        fact: "Despite their appearance, hippos can move surprisingly quickly on land."
    },

    {
        name: "Kangaroo",
        category: "mammal",
        categoryName: "Mammal",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmFWTps-D8xAX6GEWTvlPX6pUMZjm7MTjvqz1AyLgohA&s=10",
        shortDescription: "A famous Australian marsupial known for hopping.",
        description: "Kangaroos use their powerful hind legs and large feet to move efficiently across open landscapes.",
        habitat: "Grasslands, forests and scrublands",
        diet: "Grass and plants",
        speed: "Up to 60 km/h",
        size: "Up to 2 m tall",
        fact: "Female kangaroos carry young in a pouch."
    },

    {
        name: "Red Panda",
        category: "mammal",
        categoryName: "Mammal",
        image: "https://www.fotawildlife.ie/cdn/shop/articles/Red_panda_names_web_1_98c08193-9350-4681-8dc9-caca5a5137c2.jpg?",
        shortDescription: "A small tree-dwelling mammal from the Himalayas.",
        description: "Red pandas are excellent climbers and spend much of their time in trees.",
        habitat: "Mountain forests",
        diet: "Bamboo, fruit and insects",
        speed: "Up to 40 km/h",
        size: "About 50–65 cm body length",
        fact: "Red pandas are not closely related to giant pandas."
    },

    {
        name: "Gray Wolf",
        category: "mammal",
        categoryName: "Mammal",
        image: "https://cdn.britannica.com/07/5207-050-5BC9F251/Gray-wolf.jpg",
        shortDescription: "A highly social wild canine that lives in packs.",
        description: "Gray wolves communicate using body language, scent marking and vocalizations.",
        habitat: "Forests, mountains and grasslands",
        diet: "Deer and other animals",
        speed: "Up to 60 km/h",
        size: "Up to 1.6 m long",
        fact: "Wolves cooperate when hunting and raising young."
    },

    {
        name: "Red Fox",
        category: "mammal",
        categoryName: "Mammal",
        image: "https://t4.ftcdn.net/jpg/00/76/47/97/360_F_76479767_gv1iIKiZ0e9K1gw8YLGx5HBAQRHufrFB.jpg",
        shortDescription: "A clever and adaptable member of the dog family.",
        description: "Red foxes can live in forests, grasslands and even urban environments.",
        habitat: "Forests, grasslands and cities",
        diet: "Omnivore",
        speed: "Up to 50 km/h",
        size: "Up to 1 m long",
        fact: "Foxes have excellent hearing."
    },

    {
        name: "Armadillo",
        category: "mammal",
        categoryName: "Mammal",
        image: "https://t3.ftcdn.net/jpg/16/19/51/86/360_F_1619518686_1bcVfCCoTI8Cl76pQ4gOVK10pAA7hYZE.jpg",
        shortDescription: "A small mammal covered in a hard protective shell.",
        description: "Armadillos uses their strong claws to dig burrows and search for food.",
        habitat: "Grasslands, forests and dry areas",
        diet: "Insects, plants worms and small animals",
        speed: "Up to 48 km/h",
        size: "Up to 1.5m long",
        fact: "Armadillos can curl in to a ball to protect themselves.",
    },

    {
        name: "Fennec fox",
        category: "mammal",
        categoryName: "Mammal",
        image: "https://t3.ftcdn.net/jpg/21/59/50/52/360_F_2159505251_3DHQjjF91sEHHpgldBbRlDyCkYUDqv9K.jpg",
        shortDescription: "A small desert fox with large ears.",
        description: "Fennec foxes are nocturnal animals that use their large ears to dissipate heat and locate prey.",
        habitat: "Sahara Desert and dry areas of North Africa",
        diet: "Insects, small animals, eggs and fruits",
        speed: "Up to 40 km/h",
        size: "Up to 41 cm long",
        fact: "Their large Ears help them to stay cool and  hear prey.",
    },


    // ========================================
    // BIRDS
    // ========================================

    {
        name: "Golden Eagle",
        category: "bird",
        categoryName: "Bird",
        image: "https://t3.ftcdn.net/jpg/05/14/93/42/360_F_514934274_y7ws1XkA6v6g8YtC2TwMadptySoq2Inj.jpg",
        shortDescription: "A powerful bird of prey found across the Northern Hemisphere.",
        description: "Golden eagles are skilled aerial hunters with excellent eyesight and powerful talons.",
        habitat: "Mountains, cliffs and open countryside",
        diet: "Rabbits, birds and small mammals",
        speed: "Very fast in dives",
        size: "Wingspan up to 2.3 m",
        fact: "Golden eagles have extremely sharp vision."
    },

    {
        name: "Peacock",
        category: "bird",
        categoryName: "Bird",
        image: "https://t4.ftcdn.net/jpg/07/91/68/47/360_F_791684766_1UYaWpA9l0W1j10PD6j8mlx5a2dNptEK.jpg",
        shortDescription: "A colorful bird famous for its spectacular tail feathers.",
        description: "Male peafowl display their long tail feathers during courtship.",
        habitat: "Forests, grasslands and cultivated areas",
        diet: "Seeds, plants and insects",
        speed: "Up to 16 km/h on land",
        size: "Up to 2.3 m including tail",
        fact: "The spectacular tail display is used during courtship."
    },

    {
        name: "Flamingo",
        category: "bird",
        categoryName: "Bird",
        image: "https://t4.ftcdn.net/jpg/03/17/29/49/360_F_317294940_RlGjGql19G5JMTxDy3aMDGJx6E7ula43.jpg",
        shortDescription: "A long-legged bird famous for its pink feathers.",
        description: "Flamingos use their specially shaped bills to filter food from water.",
        habitat: "Lakes, lagoons and wetlands",
        diet: "Algae and small aquatic organisms",
        speed: "Up to 50 km/h in flight",
        size: "Up to 1.5 m tall",
        fact: "Their pink color comes partly from pigments in their diet."
    },

    {
        name: "Penguin",
        category: "bird",
        categoryName: "Bird",
        image: "https://t4.ftcdn.net/jpg/00/89/26/41/360_F_89264133_5Ot5GzqaxSHdPCOK7PTJfKtCzlVC6kP1.jpg",
        shortDescription: "A flightless seabird that is an excellent swimmer.",
        description: "Penguins use their wings as flippers to move through water.",
        habitat: "Southern Hemisphere coastal regions",
        diet: "Fish, squid and krill",
        speed: "Varies by species",
        size: "Varies by species",
        fact: "Penguins cannot fly but are highly adapted for swimming."
    },

    {
        name: "Parrot",
        category: "bird",
        categoryName: "Bird",
        image: "https://t4.ftcdn.net/jpg/00/69/75/31/360_F_69753166_DLAkjGcJmA0HDy4UVb2sZnAcRc9X4ld7.jpg",
        shortDescription: "A colorful and intelligent bird with a strong curved beak.",
        description: "Parrots are known for their intelligence, strong beaks and ability to imitate sounds.",
        habitat: "Tropical and subtropical forests",
        diet: "Fruit, seeds, nuts and plants",
        speed: "Varies by species",
        size: "Varies by species",
        fact: "Some parrots can learn to imitate a large variety of sounds."
    },

    {
        name: "Owl",
        category: "bird",
        categoryName: "Bird",
        image: "https://t3.ftcdn.net/jpg/00/87/14/80/360_F_87148050_j5bCKjzGcquZRsYZ7X8UQEs9ChiHmNsM.jpg",
        shortDescription: "A bird known for excellent hearing and night vision.",
        description: "Owls are specialized birds of prey, with many species being active at night.",
        habitat: "Forests, deserts and grasslands",
        diet: "Small mammals, birds and insects",
        speed: "Varies by species",
        size: "Varies by species",
        fact: "Many owls can rotate their heads about 270 degrees."
    },

    {
        name: "Kakapo",
        category: "bird",
        categoryName: "Bird",
        image: "https://img.magnific.com/free-photo/selective-focus-shot-nestor-kea-new-zealand_181624-31056.jpg?",
        shortDescription: "A rare, flightless parrot native to New Zealand.",
        description: "The kakapo is a nocturnal, flightless parrot and one of the world's rarest birds.",
        habitat: "Native forests and islands of New Zealand",
        diet: "Seeds, fruits, leaves and plant material",
        speed: "Cannot fly",
        size: "About 58–64 cm",
        fact: "The kakapo is the world's heaviest parrot."

    },

    {
        name: "Shoebill",
        category: "bird",
        categoryName: "Bird",
        image: "https://images.pexels.com/photos/34644511/pexels-photo-34644511.jpeg?cs=srgb&dl=pexels-rinoadamo-34644511.jpg&fm=jpg",
        shortDescription: "A large, prehistoric-looking bird found in Africa Famous for enormous bill.",
        description: "The shoebill is a large wetland bird recognized by its huge, shoe-shaped bill and distinctive appearance.",
        habitat: "Swamps and wetlands of tropical East Africa",
        diet: "Fish, frogs, reptiles and other small animals",
        speed: "Up to about 30 km/h in flight",
        size: "About 110–140 cm tall",
        fact: "Its enormous bill can measure more than 20 cm long."

    },


    // ========================================
    // REPTILES
    // ========================================

    {
        name: "Crocodile",
        category: "reptile",
        categoryName: "Reptile",
        image: "https://t3.ftcdn.net/jpg/03/46/00/46/360_F_346004601_I9T0RUWR5ozoWpafBKrKik5sDI4bpr3y.jpg",
        shortDescription: "An ancient reptile adapted to life in water and on land.",
        description: "Crocodiles are powerful semi-aquatic reptiles with strong jaws and muscular tails.",
        habitat: "Rivers, lakes and wetlands",
        diet: "Fish, birds, reptiles and mammals",
        speed: "Fast over short distances",
        size: "Species vary greatly",
        fact: "Crocodilians are among the closest living relatives of birds."
    },

    {
        name: "Komodo Dragon",
        category: "reptile",
        categoryName: "Reptile",
        image: "https://media.cntraveler.com/photos/590b484796ac4049cc0edcc0/16:9/w_2560%2Cc_limit/GettyImages-200253900-001.jpg",
        shortDescription: "The world's largest living lizard.",
        description: "Komodo dragons are powerful reptiles found on several Indonesian islands.",
        habitat: "Dry forests and savannas",
        diet: "Carnivore",
        speed: "Up to 20 km/h",
        size: "Up to 3 m long",
        fact: "Komodo dragons use their forked tongues to detect scents."
    },

    {
        name: "Green Iguana",
        category: "reptile",
        categoryName: "Reptile",
        image: "https://t4.ftcdn.net/jpg/05/14/33/79/360_F_514337948_VoISY3SPauxsoGaW2f8H2Pw6CRt50XIS.jpg",
        shortDescription: "A large tree-dwelling tropical lizard.",
        description: "Green iguanas spend much of their time in trees and are also strong swimmers.",
        habitat: "Tropical forests and wetlands",
        diet: "Mostly plants",
        speed: "Up to 35 km/h",
        size: "Up to 2 m long",
        fact: "Green iguanas can use their tails for defense."
    },

    {
        name: "Green Sea Turtle",
        category: "reptile",
        categoryName: "Reptile",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Friendly_Green_Sea_Turtle_%2848940725538%29.jpg?",
        shortDescription: "A marine reptile that travels across tropical oceans.",
        description: "Green sea turtles spend much of their lives in the ocean but return to beaches to lay eggs.",
        habitat: "Tropical and subtropical oceans",
        diet: "Seagrass and algae",
        speed: "Up to 35 km/h",
        size: "Up to 1.5 m",
        fact: "Green sea turtles can travel long distances between feeding and nesting areas."
    },

    {
        name: "Chameleon",
        category: "reptile",
        categoryName: "Reptile",
        image: "https://t4.ftcdn.net/jpg/01/77/45/71/360_F_177457159_3dnxkG0rPQbG7u9mSZbaoSjwBX7mwWtq.jpg",
        shortDescription: "A lizard known for specialized eyes and a grasping tail.",
        description: "Chameleons are tree-dwelling reptiles with independently moving eyes and long tongues.",
        habitat: "Forests and shrublands",
        diet: "Insects and other small animals",
        speed: "Varies by species",
        size: "Varies by species",
        fact: "Chameleons can move their eyes independently."
    },

    {
        name: "Galapagos Tortoise",
        category: "reptile",
        categoryName: "Reptile",
        image: "https://t4.ftcdn.net/jpg/20/45/12/99/360_F_2045129946_jMGbS4XYcF7p0LREKm4am674MpEyM0kv.jpg",
        shortDescription: "A giant tortoise native to the Galapagos Islands.",
        description: "Galapagos tortoises are among the largest living tortoises and can live for many decades.",
        habitat: "Grasslands, forests and dry areas",
        diet: "Grasses, leaves and plants",
        speed: "Slow-moving",
        size: "Up to about 1.5 m",
        fact: "Some Galapagos tortoises can live for more than a century."
    },

    {
    name: "Tuatara",
    category: "reptile",
    categoryName: "Reptile",
    image: "https://t4.ftcdn.net/jpg/20/76/19/49/360_F_2076194905_rsc3dlcOVrFdkGHCP8GAECs7GETugfAM.jpg",
    shortDescription: "An ancient reptile found only in New Zealand.",
    description: "The tuatara is a unique reptile that has survived for millions of years and is the only living member of its order.",
    habitat: "Coastal forests and rocky islands",
    diet: "Insects, spiders, worms, small reptiles and other small animals",
    speed: "Up to about 20 km/h",
    size: "About 40–60 cm",
    fact: "Tuatara have a special light-sensitive structure often called a third eye."
},

{
    name: "Gharial",
    category: "reptile",
    categoryName: "Reptile",
    image: "https://t4.ftcdn.net/jpg/03/76/78/55/360_F_376785500_0puoy1vu1EJkFr4u2DZgeg21noWjZXWP.jpg",
    shortDescription: "A critically endangered crocodilian with a long, narrow snout.",
    description: "The gharial is a large fish-eating crocodilian native to rivers of the Indian subcontinent.",
    habitat: "Deep rivers and sandy riverbanks",
    diet: "Mostly fish",
    speed: "Up to about 30 km/h in short bursts",
    size: "Can reach about 6 metres",
    fact: "The male gharial develops a bulbous growth on the tip of its snout."
},


    // ========================================
    // MARINE ANIMALS
    // ========================================

    {
        name: "Blue Whale",
        category: "marine",
        categoryName: "Marine",
        image: "https://t3.ftcdn.net/jpg/02/82/58/50/360_F_282585037_uMgChjDsn8eFruY0XoplPe46h1SnGwT0.jpg",
        shortDescription: "The largest animal known to have ever lived.",
        description: "Blue whales are enormous marine mammals that feed mainly on tiny organisms called krill.",
        habitat: "Oceans around the world",
        diet: "Mostly krill",
        speed: "Around 20 km/h cruising",
        size: "Up to about 30 m",
        fact: "The blue whale is the largest known animal in Earth's history."
    },

    {
        name: "Dolphin",
        category: "marine",
        categoryName: "Marine",
        image: "https://upload.wikimedia.org/wikipedia/commons/2/22/Dolphin_Ocean.jpg?",
        shortDescription: "An intelligent and social marine mammal.",
        description: "Dolphins use sounds and echolocation to communicate and navigate underwater.",
        habitat: "Oceans and some rivers",
        diet: "Fish and squid",
        speed: "Up to 60 km/h",
        size: "Varies by species",
        fact: "Dolphins use echolocation to locate objects underwater."
    },

    {
        name: "Orca",
        category: "marine",
        categoryName: "Marine",
        image: "https://t4.ftcdn.net/jpg/03/05/74/47/360_F_305744788_KG7nnyk9j1WhxxlMgQYgHOZnfN4xqrr0.jpg",
        shortDescription: "A powerful marine mammal also known as the killer whale.",
        description: "Orcas are highly social dolphins that live in family groups called pods.",
        habitat: "Oceans worldwide",
        diet: "Fish and marine animals",
        speed: "Up to 56 km/h",
        size: "Up to 9 m long",
        fact: "Orcas are the largest members of the dolphin family."
    },

    {
        name: "Great White Shark",
        category: "marine",
        categoryName: "Marine",
        image: "https://t3.ftcdn.net/jpg/01/25/96/76/360_F_125967691_sqIPifSBxiMcgIicmyJPnlSNX7yRDacv.jpg",
        shortDescription: "A large predatory shark found in coastal waters.",
        description: "Great white sharks are powerful marine predators with highly developed senses.",
        habitat: "Temperate and coastal oceans",
        diet: "Fish and marine animals",
        speed: "Up to 40 km/h",
        size: "Up to 6 m long",
        fact: "Great white sharks can detect chemicals in the water."
    },

    {
        name: "Octopus",
        category: "marine",
        categoryName: "Marine",
        image: "https://t3.ftcdn.net/jpg/05/83/48/02/360_F_583480204_1qhS2ZCFtnkAA5Tgp8galkcBNW49G8qG.jpg",
        shortDescription: "A highly intelligent marine animal with eight arms.",
        description: "Octopuses are known for problem-solving abilities and their ability to change color and texture.",
        habitat: "Oceans and rocky seafloors",
        diet: "Crabs, fish and shellfish",
        speed: "Varies by species",
        size: "Varies by species",
        fact: "Octopuses have three hearts."
    },

    {
        name: "Manta Ray",
        category: "marine",
        categoryName: "Marine",
        image: "https://www.4ocean.com/cdn/shop/articles/manta-rays-gentle-giants-under-threat4ocean.jpg?",
        shortDescription: "A large graceful ray that glides through tropical oceans.",
        description: "Manta rays use their broad fins to glide through the water and filter-feed on tiny organisms.",
        habitat: "Tropical and subtropical oceans",
        diet: "Plankton",
        speed: "Up to about 35 km/h",
        size: "Wingspan can exceed 5 m",
        fact: "Manta rays are closely related to sharks and other rays."
    },

    {
        name: "Seahorse",
        category: "marine",
        categoryName: "Marine",
        image: "https://t4.ftcdn.net/jpg/01/65/03/97/360_F_165039757_BtfpUzoBoclxAd1GD8tIkZM0ZpQnOpHQ.jpg",
        shortDescription: "A small marine fish with a distinctive horse-like head.",
        description: "Seahorses use their tails to grip plants and other objects in the water.",
        habitat: "Seagrass beds, coral reefs and coastal waters",
        diet: "Tiny crustaceans",
        speed: "Very slow swimmer",
        size: "Varies by species",
        fact: "Male seahorses carry developing young in a specialized pouch."
    },

    {
    name: "Vaquita",
    category: "marine",
    categoryName: "Marine",
    image: "https://t3.ftcdn.net/jpg/17/14/25/26/360_F_1714252615_ARfBdQvjTSW4kN20FDGqWQR6nPXvWDCn.jpg",
    shortDescription: "A tiny porpoise found only in the northern Gulf of California.",
    description: "The vaquita is the smallest member of the cetacean family and is found only in a very limited area of Mexico.",
    habitat: "Shallow coastal waters of the northern Gulf of California",
    diet: "Small fish, squid and crustaceans",
    speed: "Up to about 40 km/h",
    size: "About 1.2–1.5 metres",
    fact: "The vaquita is the world's smallest cetacean."
},
{
    name: "Leafy Seadragon",
    category: "marine",
    categoryName: "Marine",
    image: "https://t4.ftcdn.net/jpg/19/53/18/93/360_F_1953189314_gcjaagqluarQP2IdYmAyZn7pjxu3pus4.jpg",
    shortDescription: "A remarkable marine animal covered in leaf-like appendages.",
    description: "The leafy seadragon is a relative of seahorses and uses its unusual appearance to blend into seaweed and kelp.",
    habitat: "Rocky reefs and kelp beds of southern Australia",
    diet: "Tiny shrimp and other small crustaceans",
    speed: "Slow swimmer",
    size: "Up to about 35 cm",
    fact: "Its leaf-like appendages help it camouflage itself among seaweed."
},

];


// ========================================
// HTML ELEMENTS
// ========================================

const animalGrid = document.getElementById("animalGrid");
const noResults = document.getElementById("noResults");


// ========================================
// DISPLAY ANIMALS
// ========================================

function displayAnimals(animalList) {

    animalGrid.innerHTML = "";

    if (animalList.length === 0) {
        noResults.style.display = "block";
        return;
    }

    noResults.style.display = "none";

    animalList.forEach((animal) => {

        const card = document.createElement("div");

        card.className = "animal-card";

        card.innerHTML = `
            <div
                class="animal-image"
                style="background-image: url('${animal.image}')"
            >
                <span class="animal-category">
                    ${animal.categoryName}
                </span>
            </div>

            <div class="animal-info">

                <h3>${animal.name}</h3>

                <p>
                    ${animal.shortDescription}
                </p>

                <span class="learn-more">
                    Explore Story →
                </span>

            </div>
        `;

        card.addEventListener("click", () => {
            openAnimal(animal);
        });

        animalGrid.appendChild(card);

    });
}


// ========================================
// SEARCH
// ========================================

function searchAnimals() {

    const searchText =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();

    const filteredAnimals = animals.filter(animal =>
        animal.name.toLowerCase().includes(searchText) ||
        animal.category.toLowerCase().includes(searchText) ||
        animal.description.toLowerCase().includes(searchText)
    );

    displayAnimals(filteredAnimals);

    document
        .getElementById("animals")
        .scrollIntoView({
            behavior: "smooth"
        });
}


// ========================================
// SEARCH WITH ENTER
// ========================================

document
    .getElementById("searchInput")
    .addEventListener("keydown", function(event) {

        if (event.key === "Enter") {
            searchAnimals();
        }

    });


// ========================================
// FILTER BY CATEGORY
// ========================================

function filterAnimals(category) {

    document
        .querySelectorAll(".category")
        .forEach(button => {
            button.classList.remove("active");
        });

    // Find the matching category button without relying
    // on a global "event" variable.
    document
        .querySelectorAll(".category")
        .forEach(button => {

            const buttonText = button.textContent
                .toLowerCase()
                .trim();

            if (
                (category === "all" && buttonText === "all") ||
                (category === "mammal" && buttonText === "mammals") ||
                (category === "bird" && buttonText === "birds") ||
                (category === "reptile" && buttonText === "reptiles") ||
                (category === "marine" && buttonText === "marine")
            ) {
                button.classList.add("active");
            }

        });

    if (category === "all") {
        displayAnimals(animals);
        return;
    }

    const filteredAnimals =
        animals.filter(animal =>
            animal.category === category
        );

    displayAnimals(filteredAnimals);
}


// ========================================
// OPEN ANIMAL MODAL
// ========================================

function openAnimal(animal) {

    document.getElementById("modalCategory").textContent = animal.categoryName;
    document.getElementById("modalName").textContent = animal.name;
    document.getElementById("modalDescription").textContent = animal.description;

    document.getElementById("modalHabitat").textContent = animal.habitat;
    document.getElementById("modalDiet").textContent = animal.diet;
    document.getElementById("modalSpeed").textContent = animal.speed;
    document.getElementById("modalSize").textContent = animal.size;
    document.getElementById("modalFact").textContent = animal.fact;

    // Show the animal photo
    const modalImage = document.getElementById("modalImage");

    modalImage.style.backgroundImage = `url("${animal.image}")`;
    modalImage.style.backgroundSize = "cover";
    modalImage.style.backgroundPosition = "center";
    modalImage.style.backgroundRepeat = "no-repeat";

    // Add Play Video button
    modalImage.innerHTML = `
        <button id="playVideoButton" onclick="playAnimalVideo()">
            ▶ Play Video
        </button>
    `;

    // Remember the animal currently open
    window.currentAnimal = animal;

    // Open modal
    document.getElementById("animalModal").classList.add("show");
}


// ========================================
// PLAY ANIMAL VIDEO
// ========================================

function playAnimalVideo() {

    const animal = window.currentAnimal;

    if (!animal) {
        return;
    }

    if (!animal.video) {
        alert("No video is available for this animal yet.");
        return;
    }

    const modalImage = document.getElementById("modalImage");

    // Remove photo
    modalImage.style.backgroundImage = "none";

    // Put YouTube video in the same place
    modalImage.innerHTML = `
        <iframe
            src="https://www.youtube.com/embed/${animal.video}?autoplay=1"
            title="${animal.name} video"
            allow="autoplay; encrypted-media"
            allowfullscreen>
        </iframe>
    `;
}


// ========================================
// CLOSE MODAL
// ========================================

function closeModal() {

    const modal = document.getElementById("animalModal");

    modal.classList.remove("show");

    document.body.style.overflow = "auto";

    // Stop video when modal closes
    const modalImage = document.getElementById("modalImage");

    modalImage.innerHTML = "";

    window.currentAnimal = null;
}


// ========================================
// INITIAL LOAD
// ========================================

displayAnimals(animals);