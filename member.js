function skillsMember() {
    var skills = {
        name: "John",
        age: 30,
        skills: ["Javascript", "React", "NodeJS"],
        showSkills: function() {
            this.skills.forEach(skill => {
                console.log(`${this.name} has the skill: ${skill}`);
            });
        }
    }

    return skills;
}