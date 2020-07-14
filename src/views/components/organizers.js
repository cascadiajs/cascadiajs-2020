const organizers = [
    {key: 'carter-rabasa', name: 'Carter Rabasa', pronouns: 'He/him', title: 'Lead Organizer', place: 'Seattle, WA'},
    {key: 'jessica-west', name: 'Jessica West', pronouns: 'She/her', title: 'Co-Organizer', place: 'Seattle, WA'},
    {key: 'carrie-rabasa', name: 'Carrie Rabasa', pronouns: 'She/her',  title: 'Design Lead', place: 'Seattle, WA'},
    {key: 'jim-liu', name: 'Jim Liu', pronouns: 'He/him',  title: 'Community Lead', place: 'Seattle, WA'},
    {key: 'heidi-laursen', name: 'Heidi Laursen', pronouns: 'She/her',  title: 'Speaker Wrangler', place: 'Seattle, WA'},
    {key: 'gabi-dombrowski', name: 'Gabi Dombrowski', pronouns: 'She/her',  title: 'Mentorship Lead', place: 'Kansas City, MO'},
    {key: 'cassidy-williams', name: 'Cassidy Williams', pronouns: 'She/her',  title: 'Master of Ceremonies', place: 'Seattle, WA'},
    {key: 'brenden-niedermeyer', name: 'Brenden Niedermeyer', pronouns: 'He/him',  title: 'New Speaker Lead', place: 'Seattle, WA'},
    {key: 'brian-love', name: 'Brian Love', pronouns: 'He/him',  title: 'New Speaker Support', place: 'Seattle, WA'},
    {key: 'nicole-oliver', name: 'Nicole Oliver', pronouns: 'She/her',  title: 'New Speaker Support', place: 'Seattle, WA'},
    {key: 'becca-lee', name: 'Becca Lee', pronouns: 'She/her',  title: 'Talk Review Commitee', place: 'Seattle, WA'},
    {key: 'kate-pond', name: 'Kate Pond', pronouns: 'She/her',  title: 'Talk Review Commitee', place: 'Seattle, WA'},
    {key: 'kyle-mcleod', name: 'Kyle Mcleod', pronouns: 'He/him',  title: 'Talk Review Commitee', place: 'Bend, OR'}
]

module.exports = function OrganizerContainer () {
    return /*html*/`
    <div id="organizer-list">
        ${ organizers.map(o => /*html*/`
        <div class="organizer">
            <div class="organizer-photo" style="background-image:url('/images/organizers/${ o.key }.jpg'), linear-gradient(45deg, #112378, #17C37B);"></div></a>
            <div class="organizer-info">
                <div class="organizer-name">${ o.name }</div>
                <div class="organizer-misc">${ o.title }<br/>${ o.pronouns }<br/>${ o.place }</div>
            </div>
        </div>`).join("")}
    </div>`
}

/*

    <div class="organizer">
        <div class="organizer-photo" style="background-image:url('/images/organizers/carrie-rabasa.jpg'), linear-gradient(45deg, #112378, #17C37B);"></div></a>
        <div class="organizer-info">
            <div class="organizer-name">Carrie Rabasa</div>
            <div class="organizer-misc">
                Lead Designer<br/>Seattle, WA
            </div>
        </div>
    </div>
    <div class="organizer">
        <div class="organizer-photo" style="background-image:url('/images/organizers/jessica-west.jpg'), linear-gradient(45deg, #112378, #17C37B);"></div></a>
        <div class="organizer-info">
            <div class="organizer-name">Jessica West</div>
            <div class="organizer-misc">
                Speaker Lead<br/>Seattle, WA
            </div>
        </div>
    </div>
    <div class="organizer">
        <div class="organizer-photo" style="background-image:url('/images/organizers/jim-liu.jpg'), linear-gradient(45deg, #112378, #17C37B);"></div></a>
        <div class="organizer-info">
            <div class="organizer-name">Jim Liu</div>
            <div class="organizer-misc">
                Community Lead<br/>Seattle, WA
            </div>
        </div>
    </div>
    <div class="organizer">
        <div class="organizer-photo" style="background-image:url('/images/organizers/brenden-niedermeyer.jpg'), linear-gradient(45deg, #112378, #17C37B);"></div></a>
        <div class="organizer-info">
            <div class="organizer-name">Brenden Niedermeyer</div>
            <div class="organizer-misc">
                New Speaker Support<br/>Seattle, WA
            </div>
        </div>
    </div>
    <div class="organizer">
        <div class="organizer-photo" style="background-image:url('/images/organizers/heidi-laursen.jpg'), linear-gradient(45deg, #112378, #17C37B);"></div></a>
        <div class="organizer-info">
            <div class="organizer-name">Heidi Laursen</div>
            <div class="organizer-misc">
                Speaker Wrangler<br/>Seattle, WA
            </div>
        </div>
    </div>
    <div class="organizer">
        <div class="organizer-photo" style="background-image:url('/images/organizers/gabi-dombrowski.jpg'), linear-gradient(45deg, #112378, #17C37B);"></div></a>
        <div class="organizer-info">
            <div class="organizer-name">Gabi Dombrowski</div>
            <div class="organizer-misc">
                Mentorship Lead<br/>Kansas City, MO
            </div>
        </div>
    </div>
</div>


*/