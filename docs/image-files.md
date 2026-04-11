

1: we use /static/content-workspace/.... 

- this is where we have the current deck , audio and images BUT they also have a group of images with prefix "gen-*" . these are genenral images like backgrounds etc and are already in this folder to be used in all slides. 
 - when the deck in workspace is ready - a script moves the deck , audio AND only the non gen-* images to /static/content (the gen- images remain for next slide). these are already existing in the main /static/content as well. 
 clear ? 


Further 

1: for new deck we need create-deck (check unique slug).
2: for new image we also need same check-name not to over write - 
3: we do  need images.json so we need image upload. in meta data we write what the image show (graphics , colors etc). the educational content of the slide is clear form the deck where it is used.  

so we freely use the images (drop create ) in /static/content-workspace/....  
BUT when we have to move then then the cli ask one by one just like now --we have this code

we do not need and for audio -- no need . 

Question : What if it is in content it is "published" no need for status. if a deck is not ready dont add it to content. no status -- content = published content-workspace not published.what to do with half decks --- we dont care.
 --- no publishe no tags.

disucss


--> We can create simple tests - to check content health --side note
