const recipeData = [
  {
    name: "Roasted Zucchini",
    link: "https://www.facebook.com/share/r/1CjtfmMvH1/",
    tags: ["Zucchini"],
    ingredients: ["Zucchini", "Garlic", "Olive oil", "Greek yogurt", "Feta Cheese"],
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1690375315067660%2F&show_text=false&width=267&t=0"
  },
  {
    name: "Aubergine Lasagna",
    link: "https://www.facebook.com/share/r/16sxgB97QZ/",
    tags: ["Aubergine"],
    ingredients: ["2 aubergines" , "garlic", "olive oil", "salt & pepper", "red onion", "1 tsp smoked paprika", "sundried tomatoes", "2 tbsp tomato purée", "1 tbsp balsamic vinegar", "2 x 400g tins plum tomatoes", "250g cooked puy lentils", "200ml water", "100g walnuts", "10g fresh oregano", "150ml plant-based cream", "8 dried lasagna sheets", "100g plant-based cheese"]
    },
  {
    name: "Quinoa Salad",
    link: "https://www.facebook.com/reel/1006490817927173/",
    tags: ["Quinoa", "Aubergine"],
    ingredients: ["Aubergine", "Cherry Tomatoes", "Garlic", "Salt & Pepper", "Olive Oil", "Quinoa", "Lentils", "Jarred Pepper", "Sundried Tomatoes", "Cashews", "Lemon Juice"],
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1006490817927173%2F&show_text=false&width=267&t=0"
  },
  {
    name: "Smashed Potato Salad",
    link: "https://www.facebook.com/share/r/19dUEAifSM/",
    tags: ["Potato", "Salad"],
    ingredients: ["Potatoes", "Olive Oil", "Salt & Pepper", "Yoghurt", "Mayonnaise", "Lemon Juice", "Dill", "Parsley", "Chives", "Red Onion", "Cucumber"],
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1046748107390770%2F&show_text=false&width=267&t=0"
  },
  {
    name: "Borani",
    link: "https://www.facebook.com/reel/944165787786671/",
    tags: ["Aubergine"],
    ingredients: ["Aubergine", "Garlic", "Chick Peas", "Tomato Passata", "Spices", "Water", "Salt", "Sundried Tomatoes", "Greek Yoghurt", "Lemon Juice", "Dill", "Parsley"],
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F944165787786671%2F&show_text=false&width=267&t=0"
  },
  {
    name: "Zucchini Pasta",
    link: "https://www.facebook.com/share/r/14DZfpZZKGz/",
    tags: ["Zucchini", "Pasta"],
    ingredients: ["Zucchini", "Onion", "Seasoning", "Olive Oil", "Cream Cheese", "Garlic", "Parmegian", "Basil", "Pasta Water", "Cooked Pasta"],
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F948013213951487%2F&show_text=false&width=267&t=0"
  },
  {
    name: "Aubergine & Quinoa Bowl",
    link: "https://www.facebook.com/share/r/1A5QNVuCFU/",
    tags: ["Aubergine", "Quinoa"],
    ingredients: ["Aubergines", "Onion", "Carrots", "Olive Oil", "Garlic", "Spices", "Canned Tomatoes", "Red Kidney Beans", "Vegetable Stock", "Soy Sauce", "Salt & Pepper", "Lemon Juice", "Cooked Quinoa", "Greek Yogurt"],
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F987784476751137%2F&show_text=false&width=267&t=0"
  },
  {
    name: "Cauliflower Steak",
    link: "https://www.facebook.com/reel/822499086586346/",
    tags: ["Cauliflower"],
    ingredients: ["Large Cauliflower", "Garlic", "4 Large Carrots", "1 tsp Cumin/Paprika/Oregano", "1/2 tsp Sumac", "Olive Oil", "Salt & Pepper", "Tahini", "Water", "Lemon Juice", "1 tsp Miso", "Harissa Paste", "Olive Oil", "Parsely"],
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F822499086586346%2F&show_text=false&width=267&t=0"
  },
  {
    name: "Pan Roast with Creamy Garlic & Feta Sauce",
    link: "https://www.facebook.com/reel/791181089862992",
    tags: ["Potato", "Zucchini", "Ball Pepper"],
    ingredients: ["Potato", "Zucchini", "Red Bell Pepper", "Chick Peas", "Garlic", "Salt & Pepper", "Olive Oil", "Yogurt", "Feta Cheese", "Sundried Tomato", "Bell Pepper", "Parsley", "Lemon Juice"],
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F791181089862992%2F&show_text=false&width=267&t=0"
  },
  {
    name: "One Pot Tomato Orzo",
    link: "https://www.facebook.com/reel/1136569178060934",
    tags: ["Orzo"],
    ingredients: ["Cherry Tomatoes", "Garlic", "Tomato Paste", "1 Cup Orzo", "1 tsp Italian Seasoning", "2-3 cups vegetable broth", "Salt & Pepper", "Chickpeas", "Spinach"],
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1136569178060934%2F&show_text=false&width=267&t=0"
  },
  {
    name: "Butter Beans & Roasted Cauliflower",
    link: "https://www.facebook.com/reel/489467600445701",
    tags: ["Cauliflower", "Butter Beans"],
    ingredients: ["Cauliflower", "Harissa", "Olive Oil", "Cumin", "Coriander", "Onion", "Garlic", "Smoked Paprika", "Tomato Paste", "500 g Cherry Tomatoes", "2 cans Butter Beans", "Vegetable Broth", "Salt & Pepper", "Greek Yogurt", "Pomegranade Seeds", "Parsley"],
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F489467600445701%2F&show_text=false&width=267&t=0"
  },
  {
    name: "Carrot & Butter Bean Dip",
    link: "https://www.facebook.com/reel/1303730294383083",
    tags: ["Butter Beans", "Dip"],
    ingredients: ["Carrots", "Butter Beans", "Ground Turmeric", "Cumin Seeds", " Smoked Paprika", "Garlic", "Olive Oil", "Tahini", "Lemon Juice", "Salt & Pepper"],
  },
  {
    name: "Roasted Vegetables",
    link: "https://www.facebook.com/reel/8951782511536323",
    tags: ["Broccoli", "Cauliflower"],
    ingredients: ["Broccoli", "Caulifloweer", "Onion", "Sweet Potato", "Chickpeas", "Seasoning", "Olive Oil", "Yogurt", "Tahini", "Mustard", "Lemon Juice", "Garlic", "Salt & Pepper"],
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F8951782511536323%2F&show_text=false&width=267&t=0"
  },
  {
    name: "Bean and Sun-Dried Tomato Skillet",
    link: "https://www.facebook.com/reel/1703200250526981",
    tags: ["Butter Beans"],
    ingredients: ["Onion", "Garlic", "Tomato Paste", "Seasoning", "Cooking Cream/Coconut Cream", "Sundried Tomatoes", "Butter Beans", "Spinach"],
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1703200250526981%2F&show_text=false&width=267&t=0"
  },
  {
    name: "Roasted Cauliflower & Potatoes",
    link: "https://www.facebook.com/reel/1717240235749878",
    tags: ["Cauliflower", "Potatoes"],
    ingredients: ["Olive Oil", "Chickpeas", "Potatoes", "Cauliflower", "Cornflour", "1 tsp Sumac ", "1/2 tsp Cumin", "1 tsp Paprika", "1 tsp Pul Biber", "1 tsp Garlic Powder", "Salt & Pepper", "1 tsp Dried Oregano", "1 tbsp Sesame Seeds", "Tahini", "Lemon Juice", "Cold Water"],
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1717240235749878%2F&show_text=false&width=267&t=0"
  },
  {
    name: "Aubergine Schnitzel",
    link: "https://www.facebook.com/reel/1171905377255368",
    tags: ["Aubergine"],
    ingredients: ["2 Aubergines", "Salt & Pepper", "Olive Oil", "50 g Flour", "2 Eggs", "1 tsp Mayonnaise", "1 tsp Mustard", "70 g Breadcrumbs", "2 tbsp Parsley", "2 tbsp Sesame Seeds", "1 tsp Cumin", "1 tsp Paprika", "500 g Cherry Tomatoes", "Garlic", " 1 tsp Italian Herbs", "6 Basil Leaves"],
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1171905377255368%2F&show_text=false&width=267&t=0"
  },
  {
    name: "Eggplant Parm Steak",
    link: "https://www.facebook.com/reel/491589366561539",
    tags: ["Aubergine"],
    ingredients: ["Aubergine", "Onion", "Garlic", "Canned Tomatoes", "Salt & Pepper", "Mozzarella", "Basil", "Flour", "Egg", "Breadcrumbs", "Olive Oil"],
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F491589366561539%2F&show_text=false&width=267&t=0"
  },
  {
    name: "Hassleback Aubergine",
    link: "https://www.facebook.com/reel/1866048843647756",
    tags: ["Aubergine"],
    ingredients: ["1 Aubergine", "1 Cup Marinara Sauce (260 g)", "Tomato", "Fresh Basil", "Mozzarella Cheese", "Salt & Peppr", "Garlic", "Olive Oil", "Breacrumbs", "Parmesan Cheese"],
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fbuzzfeedtasty%2Fvideos%2F1866048843647756%2F&show_text=false&width=476&t=0"
  },
  {
    name: "Smashed Potatoes with Beetroot Beans",
    link: "https://www.facebook.com/reel/1149304696381982",
    tags: ["Potatoes", "Butter Beans", "Beetroot"],
    ingredients: ["Potatoes", "Dill", "Thyme", "Salt & Pepper", "1 tbsp Maple Syrup", "3 Medium Beetroots", " 2 Cans Butter Beans", "Garlic", "Tahini", "Lemon Juice", "Olive Oil", "Ground Cumin"],
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1149304696381982%2F&show_text=false&width=267&t=0"
  },
  {
    name: "Roasted Cabbage Wedges",
    link: "https://www.facebook.com/reel/1139186074658709",
    tags: ["Cabbage"],
    ingredients: ["1 Cabbage", "Olive Oil", "1/2 tsp Salt", "1/2 tsp Onion Powder", "1/2 tsp Paprika", "1/2 tsp Italian Herbs", "1/4 tsp Chili Pepper Flakes", "Garlic", "200g Feta Cheese", "150g Roasted Peppers", "150g Cream Cheese", "Lemon Juice", "Parsley", "Sesame Seeds"],
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1139186074658709%2F&show_text=false&width=267&t=0"
  },
  {
    name: "Zucchini Frittata",
    link: "https://www.facebook.com/reel/2667889830070013",
    tags: ["Zucchini"],
    ingredients: ["Onion", "Zucchini", "Carrots", "Corn", "100g Cheddar Cheese", "50g Feta Cheese", "Parsley", "2/3 Cup Flour", "1/4 Cup Milk", "Salt & Pepper"],
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2667889830070013%2F&show_text=false&width=267&t=0"
  },
  {
    name: "Zaalouk",
    link: "https://www.facebook.com/reel/1012198027387914",
    tags: ["Aubergine"],
    ingredients: ["4 Aubergines", "3 Bell Peppers", "Garlic", "3 Tomatoes", "Chillies", "Olive Oil", "Salt", "Cumin Powder", "Parsley"],
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1012198027387914%2F&show_text=false&width=267&t=0"
  },
  {
    name: "Shish Andaz",
    link: "https://www.facebook.com/reel/24912473575011901",
    tags: ["Aubergine"],
    ingredients: ["3 Aubergines", "Salt & Pepper", "Olive Oil", "Onion", "300g Walnuts", "Cinnamon", "1/2 tsp Turmeric", "Tomato Paste", "4 tbsp Pomegranate Molasses", "Ice Cubes", "Cooked Rice"],
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F24912473575011901%2F&show_text=false&width=267&t=0"
  },
  {
    name: "Za'Atar Broccoli with Red Pepper Sauce",
    link: "https://www.facebook.com/reel/2160819401066413",
    tags: ["Broccoli"],
    ingredients: ["Broccoli", "Olive Oil", "Spices", "Salt & Pepper", "Walnuts", "Cumin Seeds", "Ball Pepper", "Lemon Juice", "Garlic", "Tomato Paste"],
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2160819401066413%2F&show_text=false&width=267&t=0"
  },
  {
    name: "Baked Rice Paper Dumplings",
    link: "https://www.facebook.com/reel/1133101565401922",
    tags: ["Dumplings"],
    ingredients: ["500g mushrooms", "500g Tofu", "1 Large Carrot", " Spring Onions", "Fresh Ginger", "Garlic", "Olive Oil", " Soy Sauce", "Rice Vinegar", "1-2 Tbsp Cornstarch (Optional)", "12-14 Sheets Rice Paper", "Sesame Seeds", "1 tsp Sugar", "1 tbsp Hot Water", "2 tbsp Soy Sauce", "1 tsp Rice Vinegar", "1 tsp Chili Oil", "1 tsp Garlic (Minced)", "1 tsp Sesame Seeds", "1/2 tsp Sesame Oil"],
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1133101565401922%2F&show_text=false&width=267&t=0"
  },
  {
    name: "Spinach Feta Puff Pastry",
    link: "https://www.facebook.com/reel/24439419079016468",
    tags: ["Spinach", "Feta Cheese"],
    ingredients: ["275 g Puff Pastry", "Garlic", "350 g Frozen Spinach", "100g Feta Cheese", "100g Gouda Cheese", "1 Egg", "Salt & Pepper", "1 Egg for Brushing", "125g Mozzarella", "White & Black Sesame Seeds"],
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F24439419079016468%2F&show_text=false&width=267&t=0"
  },
  {
    name: "Minestrone",
    link: "https://www.facebook.com/reel/1833903350559898",
    tags: ["Soup"],
    ingredients: ["Olive Oil", "Onion", "Carrot", "Celery", "Potatoes", "Canned Tomatoes", "1 Can Red Kidney Beans", "100g Pearl Barley", "Parsley", "Basil", "Parmesan Cheese"],
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1833903350559898%2F&show_text=false&width=267&t=0"
  },
  {
    name: "Roasted Potatoes & Carrots Soup",
    link: "https://www.facebook.com/reel/1565305374879968",
    tags: ["Soup"],
    ingredients: ["Potatoes", "Onion", "Garlic", "Carrots", "Olive Oil", "Seasoning", "Coconut Milk", "Vegetable Broth", "Lemon Juice", "Parsley"],
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1565305374879968%2F&show_text=false&width=267&t=0"
  },
  {
    name: "Dragon Tofu",
    link: "https://www.facebook.com/reel/1247205270759892",
    tags: ["Tofu"],
    ingredients: ["Tofu", "Salt & Pepper", "1 Egg", "Cornflour", "Green/Red/Orange Ball Peppers", "Garlic", "Ginger", "Onion", "Cashew Nuts", "Ketchup", "Soy Sauce", "Red Chilli Sauce", "Honey", "Spring Onion"],
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fnotacookofficial%2Fvideos%2F1247205270759892%2F&show_text=false&width=267&t=0"
  },
  {
    name: "Fried Cabbage",
    link: "https://www.facebook.com/reel/24393568470270522",
    tags: ["Cabbage"],
    ingredients: ["Cabbage", "Onion", "Garlic", "Salt", "Turmeric Powder", "Coriander Powder", "Fresh Parsley"],
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F24393568470270522%2F&show_text=false&width=267&t=0"
  },
  {
    name: "Fried Zucchini Steak",
    link: "https://www.facebook.com/reel/851767694051900",
    tags: ["Zucchini"],
    ingredients: ["Zucchini", "Salt & Pepper", "Flour", "2 Eggs", "Grated Cheese"],
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F851767694051900%2F&show_text=false&width=267&t=0"
  },
  {
    name: "Tavče Gravče",
    link: "https://www.facebook.com/reel/2021740858657674",
    tags: ["Cannellini Beans"],
    ingredients: ["Cannellini Beans", "Salt & Pepper", "2 Onions", "Garlic", "Bay Leaves", "Dried Chillies", "Long Red Peppers", "Olive Oil", "Tomato Paste", "1 tsp Plain Flour", "1 tbsp Sweet Paprika", "Dried Mint"],
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2021740858657674%2F&show_text=false&width=267&t=0"
  },
  {
    name: "Çiğ Köfte (Turkish Bulgur Balls)",
    link: "https://www.facebook.com/reel/2021740858657674",
    tags: ["Bulgur"],
    ingredients: ["400g Brown Bulgur", "3 Large Tomatoes", "1 Large Onnion", "Garlic", " 125g Walnuts", "1 tbsp Tomato Paste", "2 tbsp Mild Red Pepper Paste", "1 tbsp Chilli Flakes", "1 tbsp Isot Pepper", "1 tsp Cumin Powder", "1 tsp Baharat", "Salt & Pepper", "120g Pomegranate Molasses", "120g Olive Oil", "1/2 Lettuce", "1 Lemon"],
    embedUrl: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2021740858657674%2F&show_text=false&width=267&t=0"
  }
];
