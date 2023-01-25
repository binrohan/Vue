const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

const game = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      logs: [],
      winner: null,
    };
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth < 0) return { width: '0%' };
      return { width: this.monsterHealth + '%' };
    },
    playerBarStyles() {
      if (this.playerHealth < 0) return { width: '0%' };
      return { width: this.playerHealth + '%' };
    },
    isSpecialAttackUnlocked() {
      return this.currentRound % 3 === 0 && this.currentRound !== 0;
    },
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = 'draw';
      } else if (value <= 0) {
        this.winner = 'monster';
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = 'draw';
      } else if (value <= 0) {
        this.winner = 'player';
      }
    },
  },
  methods: {
    attackMonster() {
      const attackValue = getRandomNumber(5, 12);
      this.monsterHealth -= attackValue;

      this.addLog('player', 'attack', attackValue);

      this.attackPlayer();

      this.currentRound++;
    },
    attackPlayer() {
      const attackValue = getRandomNumber(15, 8);
      this.playerHealth -= attackValue;

      this.addLog('monster', 'attack', attackValue);
    },
    specialAttackMonster() {
      const attackValue = getRandomNumber(10, 25);
      this.monsterHealth -= attackValue;

      this.addLog('player', 'attack', attackValue);

      this.attackPlayer();

      this.currentRound++;
    },
    healPlayer() {
      const healValue = getRandomNumber(5, 12);

      if (healValue + this.playerHealth > 100) this.playerHealth = 100;
      else this.playerHealth += healValue;

      this.currentRound++;

      this.addLog('player', 'heal', healValue);

      this.attackPlayer();
    },
    surrender() {
      this.winner = 'monster';
    },
    restart() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.logs = [];
      this.winner = null;
    },
    addLog(who, what, value) {
      this.logs.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value,
      });
    },
  },
});

game.mount('#game');
