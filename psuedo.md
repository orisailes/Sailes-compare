the app will fetch and map top 5(?) finance information from gemel net api and using states to store the data.

* after the data fetch and mapped properly,the user can select one of the companies and  see all the relevant information about provident fund/pension/provident for investment and more. the user can sort or filter the result.

* the user can make compare the condition/fees/profits between two funds from different  companies in the past 5 years.

* the user can "save" fund that he got interested at. they will be at some private favorite area that will stored at his local storage. inside this area the user can see all the fund and products every time.

* there will be page inside the app that give a little bit of information about the 5 companies that the site provfides the info.

* extra: there will be fake ads, donate us, and contact us 


 <!-- BREAKDOWN: -->

Day1:
- play with the api and find all the companies that he provided. map each companie with only relevant info and add them to the app state.
- build header and logo for the site. make simple css primary and secondary colors . build footer as well.
- the nav bar should contains contact, compare, investment options. the landing page should display the user buttons to navigate at
- ideas for nav bar here https://freefrontend.com/bootstrap-sidebars/

Day 2:
- work on the display the whole data. using either chart.js or learn how to do it via figma
the data should diplay by user select, he can put more than one company and he can sort the table display. each company will got a little avatar at her left side, little icon of '?' to display data when hover and flex green or red background color affect by profits/etc.
- the table should be very flexible and functionally. the user can sort,display only fund/pension/display products sort by their fees and so on.
- the table should have 2 buttons. button to 'add to compare' and button to 'add to watch list'.

Day 3:
- work about the compare page. the compare page will compare only 2 products at the same time.
the comparing will includes fees,profits,company name,disposits,withdraw and more.
- the data will display in super comfortably way using pie graphs/table/bars/cards. diagram here: https://app.diagrams.net/.

Day 4:
- contino to work on the compare section.find data about each month at the 12 past and display them. (super important!)

Day 5:
- find way to display past 12 month profits. if cant, think about another feature to add.
- make sort option in table section

Day 6:
- add the watch list. in this section, data about the company will display and quick contact way to get detail about corrent product.
- extra: if there is a time, add fake pop up adv and "donate us" card as well

Day 7: 
* Table header position fix 
* nav bar fix bug 
- risk day.
- netlify & github.

<!-- Hot To -->

* Components: app,table page, compare page, watch list, header, footer, pop up adv(?),
about us(?)

* step 1: massage the data and get all 5 companies in order to start.  the table component should hold the state (see the diagram) and display the whole data/selected data via table. be aware to the id of each product that given by the api and store it properly. save the whole data in arrays, each company in individual array.

* step 2: after the raw data become fresh, build header and footer

* step 3: transform the data from the app ti the table component and display it via table. make little icon and bold thing that important. change the background color depends on profit value and make it readble. unimportant thing will not display! the proper place to display it is in the compare section.

* step 4: when user click to the compare/add to fav button on each product, the app's state should store thoese value. compare section get his data as array from the app state as well as the my favorite section.

* step 5: install chart js the react-y version and start to inject information to each graph. try to make this as clean as possible via chart.js's default components.

