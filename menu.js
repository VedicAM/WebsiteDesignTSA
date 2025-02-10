fetch('drinks.json')
    .then(response => response.json())
    .then(jsonData => {
        const container = document.getElementById("drinks");

        jsonData.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("max-w-sm", "bg-white", "border", "border-gray-200", "rounded-lg", "shadow-sm");

            const link = document.createElement("a");
            link.href = "#";

            const imageContainer = document.createElement("div");
            imageContainer.classList.add("w-full", "h-64", "overflow-hidden");

            const image = document.createElement("img");
            image.src = item.image;
            image.alt = item.name;
            image.classList.add("rounded-t-lg", "object-cover", "w-full", "h-full");

            imageContainer.appendChild(image);

            link.appendChild(imageContainer);

            const content = document.createElement("div");
            content.classList.add("p-5");

            const title = document.createElement("h5");
            title.classList.add("mb-2", "text-2xl", "font-bold", "tracking-tight", "text-gray-900");
            title.textContent = item.name;

            const price = document.createElement("p");
            price.classList.add("mb-3", "font-small", "text-gray-500");
            price.textContent = item.price;

            const description = document.createElement("p");
            description.classList.add("mb-3", "font-normal", "text-gray-700");
            description.textContent = item.description;

            content.appendChild(title);
            content.appendChild(price);
            content.appendChild(description);

            card.appendChild(link);
            card.appendChild(content);

            container.appendChild(card);
        });
    })
    .catch(error => {
        console.error("Error loading JSON data: ", error);
    });

fetch('snacks.json')
    .then(response => response.json())
    .then(jsonData => {
        const container = document.getElementById("snacks");

        jsonData.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("max-w-sm", "bg-white", "border", "border-gray-200", "rounded-lg", "shadow-sm");

            const link = document.createElement("a");
            link.href = "#";

            const imageContainer = document.createElement("div");
            imageContainer.classList.add("w-full", "h-64", "overflow-hidden");

            const image = document.createElement("img");
            image.src = item.image;
            image.alt = item.name;
            image.classList.add("rounded-t-lg", "object-cover", "w-full", "h-full");

            imageContainer.appendChild(image);

            link.appendChild(imageContainer);

            const content = document.createElement("div");
            content.classList.add("p-5");

            const title = document.createElement("h5");
            title.classList.add("mb-2", "text-2xl", "font-bold", "tracking-tight", "text-gray-900");
            title.textContent = item.name;

            const price = document.createElement("p");
            price.classList.add("mb-3", "font-small", "text-gray-500");
            price.textContent = item.price;

            const description = document.createElement("p");
            description.classList.add("mb-3", "font-normal", "text-gray-700");
            description.textContent = item.description;

            content.appendChild(title);
            content.appendChild(price);
            content.appendChild(description);

            card.appendChild(link);
            card.appendChild(content);

            container.appendChild(card);
        });
    })
    .catch(error => {
        console.error("Error loading JSON data: ", error);
    });

fetch('soups.json')
    .then(response => response.json())
    .then(jsonData => {
        const container = document.getElementById("soups");

        jsonData.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("max-w-sm", "bg-white", "border", "border-gray-200", "rounded-lg", "shadow-sm");

            const link = document.createElement("a");
            link.href = "#";

            const imageContainer = document.createElement("div");
            imageContainer.classList.add("w-full", "h-64", "overflow-hidden");

            const image = document.createElement("img");
            image.src = item.image;
            image.alt = item.name;
            image.classList.add("rounded-t-lg", "object-cover", "w-full", "h-full");

            imageContainer.appendChild(image);

            link.appendChild(imageContainer);

            const content = document.createElement("div");
            content.classList.add("p-5");

            const title = document.createElement("h5");
            title.classList.add("mb-2", "text-2xl", "font-bold", "tracking-tight", "text-gray-900");
            title.textContent = item.name;

            const price = document.createElement("p");
            price.classList.add("mb-3", "font-small", "text-gray-500");
            price.textContent = item.price;

            const description = document.createElement("p");
            description.classList.add("mb-3", "font-normal", "text-gray-700");
            description.textContent = item.description;

            content.appendChild(title);
            content.appendChild(price);
            content.appendChild(description);

            card.appendChild(link);
            card.appendChild(content);

            container.appendChild(card);
        });
    })
    .catch(error => {
        console.error("Error loading JSON data: ", error);
    });

fetch('curries.json')
    .then(response => response.json())
    .then(jsonData => {
        const container = document.getElementById("curries");

        jsonData.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("max-w-sm", "bg-white", "border", "border-gray-200", "rounded-lg", "shadow-sm");

            const link = document.createElement("a");
            link.href = "#";

            const imageContainer = document.createElement("div");
            imageContainer.classList.add("w-full", "h-64", "overflow-hidden");

            const image = document.createElement("img");
            image.src = item.image;
            image.alt = item.name;
            image.classList.add("rounded-t-lg", "object-cover", "w-full", "h-full");

            imageContainer.appendChild(image);

            link.appendChild(imageContainer);

            const content = document.createElement("div");
            content.classList.add("p-5");

            const title = document.createElement("h5");
            title.classList.add("mb-2", "text-2xl", "font-bold", "tracking-tight", "text-gray-900");
            title.textContent = item.name;

            const price = document.createElement("p");
            price.classList.add("mb-3", "font-small", "text-gray-500");
            price.textContent = item.price;

            const description = document.createElement("p");
            description.classList.add("mb-3", "font-normal", "text-gray-700");
            description.textContent = item.description;

            content.appendChild(title);
            content.appendChild(price);
            content.appendChild(description);

            card.appendChild(link);
            card.appendChild(content);

            container.appendChild(card);
        });
    })
    .catch(error => {
        console.error("Error loading JSON data: ", error);
    });

fetch('biryanis.json')
    .then(response => response.json())
    .then(jsonData => {
        const container = document.getElementById("biryanis");

        jsonData.forEach(item => {
            const card = document.createElement("div");
            card.classList.add("max-w-sm", "bg-white", "border", "border-gray-200", "rounded-lg", "shadow-sm");

            const link = document.createElement("a");
            link.href = "#";

            const imageContainer = document.createElement("div");
            imageContainer.classList.add("w-full", "h-64", "overflow-hidden");

            const image = document.createElement("img");
            image.src = item.image;
            image.alt = item.name;
            image.classList.add("rounded-t-lg", "object-cover", "w-full", "h-full");

            imageContainer.appendChild(image);

            link.appendChild(imageContainer);

            const content = document.createElement("div");
            content.classList.add("p-5");

            const title = document.createElement("h5");
            title.classList.add("mb-2", "text-2xl", "font-bold", "tracking-tight", "text-gray-900");
            title.textContent = item.name;

            const price = document.createElement("p");
            price.classList.add("mb-3", "font-small", "text-gray-500");
            price.textContent = item.price;

            const description = document.createElement("p");
            description.classList.add("mb-3", "font-normal", "text-gray-700");
            description.textContent = item.description;

            content.appendChild(title);
            content.appendChild(price);
            content.appendChild(description);

            card.appendChild(link);
            card.appendChild(content);

            container.appendChild(card);
        });
    })
    .catch(error => {
        console.error("Error loading JSON data: ", error);
    });