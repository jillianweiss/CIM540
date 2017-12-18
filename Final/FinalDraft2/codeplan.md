# Code Plan Draft #1

## Top 25 Opening Weekend Box Office Movie Releases Data Visualization

This program is a data visualization that takes data from  http://www.boxofficemojo.com/yearly/chart/?view=releasedate&view2=domestic&yr=2017&sort=opengross&order=DESC&p=.htm and displays it in a bar graph, focusing on various aspects of the films, according to different options.

The program uses a CSV (comma separated value) file that I created based on specific data I wanted from the website. My program cycles through the rows and columns of the file, collecting:
1. the title of the movie, 
2. the box office total from opening weekend, 
3. the month and day of the release, 
4. and the production company. 

Then, I created movie objects (which is the bars of the graph), using the information collected from the file. Using different variables, I was able to change the color of the graphs depending on Production Company and Season when a specific button (another object) was clicked. 
