<!-- HERE'S A BASIC DROPDOWN -->
<li className="ch-nav-elements" role="menuitem">
    <div className="ch-dropdown">
        <Link to={`/listen`}>Listen</Link>
        <div className="ch-dropdown-content">
            <a href="#">Playing For Keeps</a>
            <a href="#">The Longest Kiss</a>
            <a href="#">Battle Cry</a>
            <a href="#">Hey Girl</a>
            <a href="#">All These Dreams</a>
            <a href="#">Prisoners</a>
            <a href="#">Mechanical</a>
            <a href="#">The Haunting</a>
            <a href="#">All These Dreams Acoustic</a>
            <a href="#">T-Shirts</a>
        </div>
    </div>
</li>

/_ Dropdown Menu _/

.ch-dropdown {
position: relative;
display: inline-block;
}

.ch-dropdown-content {
display: none;
position: absolute;
/_ box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.1); _/
z-index: 1;
border-left: 1px grey solid;
background-color: rgb(248, 248, 248);
}

.ch-dropdown-content a {
opacity: 0.7;
padding: 5px 16px;
text-decoration: none;
display: block;
}

.ch-dropdown:hover .ch-dropdown-content {
display: block;
}
