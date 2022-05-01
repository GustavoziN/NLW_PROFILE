const LinksSocialMedias = {
    instagram: "Duarttzz_",
    twitter: "SlePziin",
    youtube: "channel/UCP-BOUwAnfdCUQEdm_pV0bg",
    facebook: "profile.php?id=100021617475349",
    github: "GustavoziN"
}

function TradeLinks() {
   for(let li of SocialLinks.children) {
      const social =  li.getAttribute('class')

      li.children[0].href = `https://${social}.com/${LinksSocialMedias[social]}`
   }
}

TradeLinks()

function getGitHubProfileInfo() {
    const url = `https://api.github.com/users/${LinksSocialMedias.github}`
    fetch(url).then(Response => Response.json())
    .then(data => {
        UserName.textContent = data.name;
        UserBio.textContent = data.bio
    })
}


getGitHubProfileInfo()