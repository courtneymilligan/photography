let nav = document.getElementById("nav");
let title = document.getElementById("title");
let thumbnails = document.getElementById('image-thumbnails');
let details = document.getElementById('image-details');
let imageLarge = document.getElementById('image-large');
let loc = document.getElementById('location');
let date = document.getElementById('date');
let description = document.getElementById('description');
let back = document.getElementById('back');
let info = {
    locationText: ['Cannon Beach, Oregon', 'Agawa Bay, Ontario', 'Sleeping Giant Provincial Park, Ontario', 'Sleeping Giant Provincial Park, Ontario', 'Moraine Lake, Alberta', 'Bruce Peninsula National Park, Ontario', 'Bruce Peninsula National Park, Ontario', "Ile d'Orleans, Quebec", 'Gaspe, Quebec', 'Coin-du-Banc, Quebec', 'Cap-des-Rosiers, Quebec', 'China Beach, British Columbia', 'Bear Beach, British Columbia', 'Bear Beach, British Columbia', 'Sombrio, British Columbia', 'Sault Sainte-Marie, Ontario', 'Jocelyn Hill, British Columbia', 'Jocelyn Hill, British Columbia', 'Kicking Horse Mountain Resort, British Columbia', 'Victoria, British Columbia'],
    dateText: ['Oct 1, 2019', 'June 26, 2020', 'June 26, 2020', 'June 26, 2020', 'June 30, 2020', 'Aug 1, 2020', 'Aug 1, 2020', 'Sept 6, 2020', 'Sept 9, 2020', 'Sept 10, 2020', 'Sept 11, 2020', 'Sept 18, 2020', 'Sept 18, 2020', 'Sept 18, 2020', 'Sept 19, 2020', 'Jun 25, 2020', 'Jan 15, 2021', 'Jan 15, 2021', 'Jan 29, 2021', 'Mar 10, 2021'],
    descriptionText: ["This photo was taken during a roadtrip I did with a friend from Vancouver to San Fransisco. We drove along the Oregon Coast highway which took us through many beautiful coastal towns such as this one. We weren't staying in Cannon Beach, but had to stop to watch this beautiful sunset and snap a few pictures.", "This photo was taken during a roadtrip I did across Canada with a friend. The Trans-Canada Highway follows Lake Superior in sections and offers stunning views of the great lake.", "This photo was taken during a roadtrip I did across Canada with a friend. The Trans-Canada Highway follows Lake Superior in sections and offers stunning views of the great lake.", "This photo was taken during a roadtrip I did across Canada with a friend. We didn't have much time for stops, but managed to squeeze in a short hike in Sleeping Giant National Park where we saw this incredible rock structure.", "This photo was taken during a roadtrip I did across Canada with a friend. We made a stop at Moraine Lake and were fortunate to find that we were some of the only people there. Typically, it is packed with tourists. This photo captures the beautiful mountains towering over the lake.", "This photo was taken during a hike along the Bruce Trail in Bruce Penisula National Park. This photo captures the beautiful contrast between the white rocks and the turquiose water.", "This photo was taken during a hike along the Bruce Trail in Bruce Penisula National Park. This photo captures the magnificent turquoise colour of the water surrounding the peninsula.", "This photo was taken during a roadtrip to Eastern Quebec. We stopped by a winery on the island in Quebec City which had these beautiful sunflowers next to the vineyard.", "This photo was taken during a roadtrip to Eastern Quebec. We hiked Mont Saint-Alban which overlooks this incredible peninsula.", "This photo was taken during a roadtrip to Eastern Quebec. We stopped at this railroad that follows a narrow man-made strip of land that connects the two ends of a bay.", "This photo was taken during a roadtrip to Eastern Quebec. This photo captures a quiet beach that looks out at the expanse of water between Quebec and Newfoundland.", "This photo was taken during a hike along the Juan de Fuca trail. This photo captures a quiet beach near the East end of the hike at dusk.", "This photo was taken during a hike along the Juan de Fuca trail. This photo captures a beautiful, bright purple sea urchin on the rocks at low tide.", "This photo was taken during a hike along the Juan de Fuca trail. This photo captures only a small portion of the thousands of mussels on the rocks at low tide.", "This photo was taken during a hike along the Juan de Fuca trail. We ended our hike at Sombrio Beach where we rested after two long days of hiking. This photo captures the beautiful view from the rocks where we rested.", "This photo was taken during a roadtrip across Canada I did with a friend. Our first stop was in Sault Sainte-Marie, which isn't known as the most beautiful city. So, instead of spending the evening there, we drove out of town to find a good place to watch the sunset. We found this beautiful lookout about 20min away that provided a beautiful view of the sunset over Lake Superior.", "This photo was taken during a hike I did with my brother up Jocelyn Hill. We picked a perfect, clear day and were able to see all the way out to the Olympics from the top of the hike.", "This photo was taken during a hike I did with my brother up Jocelyn Hill. THis photo captures the golden morning light on a patch of moss in the forest.", "This photo was taken during a ski trip to Kicking Horse Mountain Resort. This photo captures the view at the top of the Stairway to Heaven bootpack hike.", "This photo was taken at Cadboro Bay at sunset. This photo captures a seagull enjoying the calm waters in the pink and purple sunset light."],
};

let openImage = function(event) {
    nav.style.display = 'none';
    title.style.fontSize = '25px';
    title.style.top = 0;
    thumbnails.style.display = 'none';
    details.style.display = 'block';
    let index = parseInt(event.target.id) - 1;
    let source = event.target.src;
    let alt = event.target.alt;
    imageLarge.src = source;
    imageLarge.alt = alt;
    loc.innerHTML = "Location: " + info.locationText[index]
    date.innerHTML = "Date: " + info.dateText[index]
    description.innerHTML = "Description: " + info.descriptionText[index]
    window.scrollTo(0, 0);
};

let closeImage = function() {
    nav.style.display = '';
    title.style.fontSize = '';
    title.style.top = '';
    thumbnails.style.display = '';
    details.style.display = 'none';
};

for (i=1; i<=20; i++) {
    let image = document.getElementById(i);
    image.onclick = openImage;
};

back.onclick = closeImage;
document.onkeydown = (event) => {
    if (event.code === 'Backspace' && thumbnails.style.display === 'none') {
        closeImage()
    }
}
