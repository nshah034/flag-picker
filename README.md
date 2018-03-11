# flag-picker
This is a Flag Picker
Components:
1) Options: Component for DropDown
2) SearchBox: As per the requirements the dropdown Options for this searchBox are recieved are a function this.props.children(). On providing the value of searchBox the drop down is populated accordingly.
3) Steps: Component for 2 steps
4) Result: Component for showing selected flags
5) Main Component App.js : It maintains the state of the application

Functionality:
1) On Focus the continent drop down opens up.
2) Type Ahead to get filtered values
3) Select the continent by clicking or using up/down arrow keys and pressing enter
4) On Selecting the continent the first dropdown closes
5) On focus the country drop down opens up
6) Type Ahead to get filtered values
7) Select the countries by clicking OR using up/down arrow keys and pressing enter
8) The selected flags section get populated
9) Selecting the same country again removes that flag from the section.
10) Click remove flag to remove all the flags
11) Click X on each flag to remove individual flags


Challenges:
As the options were supposed to be passed as children there were challenges setting state while the Options were being populated.
