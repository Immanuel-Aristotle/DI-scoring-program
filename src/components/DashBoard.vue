<template>
  <div class="dashboard-container">
    <!-- Sidebar Navigation -->
    <aside class="dashboard-sidebar">
      <nav>
        <h1 class="nav-title">Admin Dashboard</h1>
        <ul class="nav-items">
          <li @click="currentView = 'criteria'" :class="{ active: currentView === 'criteria' }">
            Scoring Criteria
          </li>
          <li @click="currentView = 'users'" :class="{ active: currentView === 'users' }">
            User Management
          </li>
          <li @click="currentView = 'challenges'" :class="{ active: currentView === 'challenges' }">
            Challenges
          </li>
          <li @click="currentView = 'teams'" :class="{ active: currentView === 'teams' }">
            Teams
          </li>
          <li @click="currentView = 'reports'" :class="{ active: currentView === 'reports' }">
            Reports
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main Content Area -->
    <main class="dashboard-main">
      <!-- Header with user info -->
      <header class="dashboard-header">
        <div class="header-title">
          <h1>{{ viewTitle }}</h1>
        </div>
        <div class="header-user">
          <span>Welcome, {{ adminName }}</span>
          <button @click="logout" class="btn-logout">Logout</button>
        </div>
      </header>

      <!-- Dynamic Content Area -->
      <div class="dashboard-content">
        <!-- Placeholder content until we add the components -->
        <component v-if="currentComponent" :is="currentComponent"></component>
        <p>Content for {{ viewTitle }} will be added soon.</p>
      </div>
    </main>
  </div>
</template>
<script>
// Remove or comment out these imports for now
import CriteriaManager from './Admin/CriteriaManager.vue'
// import UserManager from './components/UserManager.vue'
// import ChallengeManager from './components/ChallengeManager.vue'
// import TeamManager from './components/TeamManager.vue'
// import ReportViewer from './components/ReportViewer.vue'

export default {
  name: 'AdminDashboard',
  components: {
    // Remove the component registrations for now
    CriteriaManager,
    // UserManager,
    // ChallengeManager,
    // TeamManager,
    // ReportViewer
  },
  data() {
    return {
      currentView: 'criteria',
      adminName: 'Admin User'
    }
  },
  computed: {
    currentComponent() {
      // For now, return null or a placeholder
      // return null
      // We'll add this back later
      const components = {
        criteria: 'CriteriaManager',
        /*users: 'UserManager',
        challenges: 'ChallengeManager',
        teams: 'TeamManager',
        reports: 'ReportViewer'*/
      }
      return components[this.currentView]
    },
    viewTitle() {
      const titles = {
        criteria: 'Scoring Criteria Management',
        users: 'User Management',
        challenges: 'Challenge Management',
        teams: 'Team Management',
        reports: 'Reports & Analytics'
      }
      return titles[this.currentView]
    }
  },
  methods: {
    logout() {
      this.$router.push('/login')
    }
  }
}
</script>
<style scoped>
.dashboard-sidebar {
  position: fixed;
  /* This fixes the sidebar */
  top: 80px;
  /* Align to top */
  left: 0;
  /* Align to left */
  height: 100vh;
  /* Full viewport height */
  width: 250px;
  /* Or whatever width you prefer */
  overflow-y: auto;
  /* Allows scrolling if sidebar content is too long */
  background-color: #f5f5f5;
  /* Or your preferred background */
}

/* Add padding to your main content to prevent overlap */
.dashboard-main {
  margin-left: 250px;
  /* Should match sidebar width */
  padding: 20px;
  width: 100%;
}

/* Make sure the container has a proper layout */
.dashboard-container {
  display: flex;
  min-height: 100vh;
}

.nav-title {
  font-size: 1.5rem;
  margin-bottom: 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ffffff33;
}

.nav-items li {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  text-align: left;
  padding: 12px 15px;
  margin: 5px 0;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
  list-style-type: square;
}


.nav-items li:hover {
  background-color: #1453ad;
  text-decoration: underline;
}

.nav-items li.active {
  background-color: #04b4ff;
}


.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-user {
  display: flex;
  align-items: center;
  padding-left: 20%;
  gap: 15px;
}

.btn-logout {
  padding: 8px 15px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.dashboard-content {
  padding: 20px;
}

</style>