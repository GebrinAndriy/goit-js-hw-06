const categoriesList = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesList.length}`);
categoriesList.forEach(element => { 
    const elementTitle = element.querySelector('h2');
    const elementLi = element.querySelectorAll('li');
    console.log(`Category: ${elementTitle.textContent}`);
    console.log(`Elements: ${elementLi.length}`);
})