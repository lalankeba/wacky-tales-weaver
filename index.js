const storyDisplay = document.getElementById("story-display");
let story = "";

const clickManWithMuddyDog = () => {
    story = story + `<p>John stood by the back door, watching as his beloved Labrador, Max, bounded towards him with joyous abandon. The once-golden retriever was now a walking testament to a day spent exploring the muddy wonders of the nearby woods. With a chuckle, John called out to his furry friend, "Max, come here, boy! It's time for a bath!" The excited dog wagged his tail even faster, leaving a trail of muddy paw prints on the patio as he approached. Undeterred by the impending bath, Max's eyes gleamed with anticipation, ready for the inevitable splash and scrub that awaited him. John smiled, knowing that the post-bath fluffiness would restore Max's golden sheen, transforming him from a mud-covered adventurer back into the clean, lovable companion that had won John's heart.</p>`;
    storyDisplay.innerHTML = story;
}

const clickManWashesDog = () => {
    story = story + `<p>Armed with a hose and a bucket of soapy water, John knelt beside the patio, ready to tackle the task of washing his mud-cloaked companion. Max, with a look of mild confusion mixed with anticipation, sat patiently as John wet his fur with a gentle spray from the hose. The muddy water dripped off in rivulets, revealing patches of Max's original golden coat underneath. John chuckled as he lathered up a sponge and began scrubbing away the dirt, Max's tail wagging in rhythm with each stroke. The air was filled with the scent of dog-friendly shampoo as John worked diligently to restore Max's cleanliness. Despite the initial protests in the form of a few playful splashes, Max soon seemed to surrender to the soothing feel of the warm water and John's gentle care. As the mud gave way to suds, a sense of satisfaction washed over both man and dog, creating a bond that transcended the messy adventure they had shared earlier.</p>`;
    storyDisplay.innerHTML = story;
}

const clickManSoapsDog = () => {
    story = story + `<p>With a firm but gentle touch, John massaged the foamy lather into Max's once-muddy fur. The rich, sudsy bubbles clung to Max's coat, transforming the brown-streaked mess into a fragrant sea of cleanliness. John's hands moved with practiced precision, working their way through the dense fur and untangling any debris caught within. Max, now fully immersed in the spa-like experience, closed his eyes and let out a contented sigh as the warm water cascaded over him. John smiled, appreciating the therapeutic nature of this routine task that strengthened the bond between man and dog. The soapy water mingled with the remnants of the day's adventure, carrying away the mud and leaving behind a refreshed and rejuvenated canine companion. As John rinsed away the suds, he couldn't help but admire the transformation before him - from a muddy explorer to a clean and revitalized friend, ready for more shared adventures.</p>`;
    storyDisplay.innerHTML = story;
}

const clickManCuddlesDog = () => {
    story = story + `<p>After the thorough shower, John wrapped Max in a fluffy towel, absorbing the last droplets of water from his now-clean coat. The air was filled with the fresh scent of shampoo, and Max's fur glistened in the soft light of the bathroom. John knelt down and gathered Max into his arms, relishing the warmth and weight of his loyal companion. Max, with a wagging tail and grateful eyes, nuzzled against John's chest, enjoying the post-shower affection. As John gently rubbed Max's ears and scratched behind his neck, a sense of companionship and love filled the room. The bond between man and dog strengthened in those quiet moments, where words were unnecessary, and the shared warmth spoke volumes. With the shower complete, the duo left the bathroom, ready to embark on the next adventure, their connection deepened by the simple act of a man caring for his furry friend.</p>`;
    storyDisplay.innerHTML = story;
}

const resetStory = () => {
    story = "";
    storyDisplay.innerHTML = story;
}
