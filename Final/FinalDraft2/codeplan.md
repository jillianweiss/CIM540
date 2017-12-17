# Code Plan Draft #1

## Top 25 Opening Weekend Box Office Movie Releases Data Visualization

This program is a data visualization that takes data from  http://www.boxofficemojo.com/yearly/chart/?view=releasedate&view2=domestic&yr=2017&sort=opengross&order=DESC&p=.htm and displays it in a bar graph, focusing on various aspects of the films, according to different options.

The program uses a CSV (comma separated value) file that I created based on specific data I wanted from the website. My program cycles through the rows and columns of the file, collecting the title of the movie, the box office total from opening weekend, the month and day of the release, and the production company. 

Then, I created movie objects (which is the bars of the graph), using the information collected from the file.
