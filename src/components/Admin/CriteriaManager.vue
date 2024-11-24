<template>
  <div class="criteria-manager">
    <!-- Criteria List -->
    <div class="criteria-list">
      <h3>Current Scoring Criteria</h3>
      <div v-for="criterion in criteria" :key="criterion.id" class="criterion-item">
        <div class="criterion-header">
          <h4>{{ criterion.name }}</h4>
          <div class="criterion-actions">
            <button @click="editCriterion(criterion)" class="btn-edit">Edit</button>
            <button @click="deleteCriterion(criterion.id)" class="btn-delete">Delete</button>
          </div>
        </div>
        <div class="criterion-details">
          <p>Scale: {{ criterion.minScore }} - {{ criterion.maxScore }}</p>
          <p>Weight: {{ criterion.weight }}%</p>
          <p>Description: {{ criterion.description }}</p>
        </div>
      </div>

      <button @click="showAddForm = true" class="btn-add">Add New Criterion</button>
    </div>

    <!-- Add/Edit Form Modal -->
    <div v-if="showAddForm || editingCriterion" class="modal">
      <div class="modal-content">
        <h3>{{ editingCriterion ? 'Edit' : 'Add' }} Criterion</h3>
        <form @submit.prevent="saveCriterion">
          <div class="form-group">
            <label>Name:</label>
            <input v-model="formData.name" required>
          </div>

          <div class="form-group">
            <label>Description:</label>
            <textarea v-model="formData.description" required></textarea>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Min Score:</label>
              <input type="number" v-model.number="formData.minScore" required>
            </div>

            <div class="form-group">
              <label>Max Score:</label>
              <input type="number" v-model.number="formData.maxScore" required>
            </div>
          </div>

          <div class="form-group">
            <label>Weight (%):</label>
            <input type="number" v-model.number="formData.weight" required min="0" max="100">
          </div>

          <div class="form-actions">
            <button type="submit" class="btn-save">Save</button>
            <button type="button" @click="closeForm" class="btn-cancel">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CriteriaManager',
  data() {
    return {
      criteria: [
        {
          id: 1,
          name: 'Technical Innovation',
          description: 'Evaluation of technical innovation and creativity',
          minScore: 0,
          maxScore: 30,
          weight: 25
        },
        // Add more sample criteria
      ],
      showAddForm: false,
      editingCriterion: null,
      formData: {
        name: '',
        description: '',
        minScore: 0,
        maxScore: 30,
        weight: 0
      }
    }
  },
  methods: {
    editCriterion(criterion) {
      this.editingCriterion = criterion
      this.formData = { ...criterion }
    },
    deleteCriterion(id) {
      if (confirm('Are you sure you want to delete this criterion?')) {
        this.criteria = this.criteria.filter(c => c.id !== id)
      }
    },
    saveCriterion() {
      if (this.editingCriterion) {
        // Update existing criterion
        const index = this.criteria.findIndex(c => c.id === this.editingCriterion.id)
        this.criteria[index] = { ...this.formData }
      } else {
        // Add new criterion
        this.criteria.push({
          ...this.formData,
          id: Date.now() // Simple ID generation
        })
      }
      this.closeForm()
    },
    closeForm() {
      this.showAddForm = false
      this.editingCriterion = null
      this.formData = {
        name: '',
        description: '',
        minScore: 0,
        maxScore: 30,
        weight: 0
      }
    }
  }
}
</script>

<style scoped>
label {
  text-align: left;
}
.criterion-details p {
  text-align: left;
}

.criteria-manager {
  max-width: 1200px;
  margin: 0 auto;
}

.criterion-item {
  background-color: white;
  padding: 20px;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.criterion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.criterion-actions {
  display: flex;
  gap: 10px;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  width: 500px;
  max-width: 90%;
}

.form-group {
  margin-bottom: 15px;
}

.form-row {
  display: flex;
  gap: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input,
textarea {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 20px;
}

button {
  padding: 8px 15px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}

.btn-edit {
  background-color: #3498db;
  color: white;
}

.btn-delete {
  background-color: #e74c3c;
  color: white;
}

.btn-add {
  background-color: #2ecc71;
  color: white;
}

.btn-save {
  background-color: #2ecc71;
  color: white;
}

.btn-cancel {
  background-color: #95a5a6;
  color: white;
}
</style>