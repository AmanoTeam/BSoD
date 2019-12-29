# BSoD
This page were used during the rewrite of our website (https://amanoteam.com).

It replicates Windows 10 Blue Screen of Death, as shown below:

![BSoD](https://i.imgur.com/EHnRAWk.png)


# Features
 - Highly customizable with CSS.
 - Fully functional QR Code.
 - Live percentage support (every 10 seconds).
 - Lightweight page.

# Setting up
To set up the page to suit your needs, just edit the index.html file.

## Changing QR Code destination
Edit the `js/bsod.js` file and change the URL on the `text` key.

## Using the live percentage feature
Edit the URL located near the bottom of the page.

The URL must be:
 - Returning a single digit (e.g: 80).
 - At the same domain as the main page, or:
 - With the `Access-Control-Allow-Origin` header set to `your_domain_name` or `*`. 
