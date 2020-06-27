class Github {
    constructor() {
        this.client_id = '6d1926dfc8987a88d823';
        this.client_secret = '1caa018ca0044be94853758de915b699bbe8538a';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&clinet_secret=${this.client_secret}`);
        const profile = await profileResponse.json();

        return {
            profile
        }
    }

}