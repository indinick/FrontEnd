# My-Personal-Assistant

https://poojaniteshchauhan.github.io/My-Personal-Assistant/

•	My PA was built on the idea to provide information that you need on a daily basis like newsfeeds, restaurants, and current temperature conditions. 
•	My application is comprised of three webpages 
o	Index.html : This pages welcomes the user and talks them through the background of the application and provides them links to setup their new profile or access an existing application.
o	setupPA.html : This page walks the user through the setup process.  The information is stored in Firebase allowing the user to access their dashboard from multiple platforms ( Chrome, Firefox, Edge , Safari, android and iOS) at a later point. 
	Information Capture 
•	Name for personalization 
•	Zip for location based information such as restaurants, and current weather. 
•	Cuisines for looking up restaurant recommendations based on location. 
•	New Feed to find news that interests the user.
o	MyPA.html : This page display the information related to weather, news , and restaurants.
	I used a modal display allowing the user to select from various profiles. I realize that everyone can see everyone else profile but when I can get the user authentication piece working, I plan to make the app more secure. 
	I use firebase to lookup the person’s profile and store it in array to be used with Ajax queries to get the data.
	I use name and current time from the moment framework to greet the user either with a Good Morning, Good Afternoon or Good Evening 
	I also use the temperature and time of day to make clothing recommendations 
•	Summer Days: Light clothing with Sunscreen 
•	Summer Nights: Light Clothing 
•	Mild Winter : Light Jackets
•	Heavy Winter : Heavy Jackets
	The information for weather was gotten from APIXU using ajax call to their api 
	I then display the news feed and link to the full website by making ajax calls to newsApi to get news feeds based on the user preferences. The preferences are set at maximum of 3 but can be changed if needed. I display the information in table. 
	I then display the recommended restaurants, with the address and rating by making ajax calls to google api to get restaurants based on the user preferences and zip code. The preferences are set at maximum of 3 but can be changed if needed. I display the information in table. 
o	All the screens are mobile responsive and extensively use a combination of custom CSS and Bootstrap to style pages 
o	Technical Requirements 
	3 API Calls
	AJAX
	Use of Transit.js for animation, Modals and Moment.js for time 
	Polished front end/UI .
	 Meet good quality coding standards ( use of functions, loops and very little use of hard coding )
	Used Modal instead of alerts 
	Used Panels and Columns 
	Used Bootstrap and Animate.css , google fonts 
	Deployed to Git
	User Validation on Cuisines where user is not allowed to enter more 3 options
	Utilize Firebase for persistent data storage.
	Make your site mobile responsive. 


