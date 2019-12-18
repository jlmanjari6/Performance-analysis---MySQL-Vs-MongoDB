# Performance Analysis - MySQL Vs MongoDB

<p>
The purpose of this case study is to clean the data, store the data in RDBMS and MongoDB, normalize the data if required, display the 
data in the web page based on the selected station id from a drop down and, measure the response time of data retrieval from RDBMS and 
MongoDB. 
</p>

# Dataset source: 
<p> www.kaggle.com/PROPPG-PPG/hourly-weather-surface-brazil-southeast-region. </p>

# About Dataset: 
<p> The given data set contains hourly weather data from a total of 122 stations of Southeast region of Brazil. This data is collected
between the years 2000 and 2016 for the purpose of predicting the amount of rain and temperature. The data contains a total of 31 columns
including 17 climatic parameters such as amount of precipitation, air pressure, solar radiation, dew points, humidity, wind and so on.
</p>

# Data cleaning:
<ul>
<li>
The data is cleaned by replacing all the null or empty values with zeros (“mean” value could have been used but, since it depends on the
business scenario and other factors, I chose to replace with zeros for the purpose of case study) </li>
</li>
<li>
The data contains many records which do not contribute towards the purpose. For example, these records contain station number, station name
etc., without actual climatic parameters such as precipitation, air pressure, solar radiation, dew points, wind speed, wind direction, wind
gust etc. The data cleaning is performed to remove such kind of records </li>
<li>
Redundant columns yr, mo, da, hr, date have been removed 
</li>
</ul>

# Loading data into DB: 
<p> Once the cleaning is done, the data is imported to MySQL and Mongo DB as below: </p>
<p> MySQL: The cleaned csv file is imported into MySQL database with the help of My SQL command line </p>
<a href="https://ibb.co/99mbZz8"><img src="https://i.ibb.co/VW0gwrj/sq.png" alt="sq" border="0"></a>
<p> Mongo DB: The cleaned csv file is imported into Mongo DB using “mongoimport” by providing the name of the database, name of the collection, 
and the path of the csv file. </p>
<a href="https://ibb.co/D7vmvq7"><img src="https://i.ibb.co/tbvnvdb/mon.png" alt="mon" border="0"></a>

# Demo
<a href="https://ibb.co/5444p6t"><img src="https://i.ibb.co/wgggGR3/sq2.png" alt="sq2" border="0"></a>
<a href="https://ibb.co/VWhd12Z"><img src="https://i.ibb.co/MDjbvM4/sq3.png" alt="sq3" border="0"></a>

# Response time measure
<h4> Insertion time measure: </h4>
<a href="https://imgbb.com/"><img src="https://i.ibb.co/VCywN6t/sq6.png" alt="sq6" border="0" height="300" width="300"></a>
<h4> Response time measure: </h4>
<a href="https://ibb.co/gt4dk3z"><img src="https://i.ibb.co/h2Yc3yD/sq4.png" alt="sq4" border="0" height="150"></a>
<a href="https://ibb.co/gWqPgSv"><img src="https://i.ibb.co/Zg4YTBH/sq5.png" alt="sq5" border="0" height="200" width="500"></a>



