<script setup>
import empresas from './empresas.json'
import {ref} from "vue";

const DEFAULT_FORM_DATA = {
  id: null,
  name: '',
  owner: ''
}

const enterprises = ref(empresas)
const formData = ref({ ...DEFAULT_FORM_DATA })
const isOpenDeleteModal = ref(false)
const selectedEnterprise = ref(null)

const formFieldName = ref()

const onNewCompany = () => {
  formData.value = { ...DEFAULT_FORM_DATA }

  formFieldName.value.focus()
}

const onSubmit = () => {
  const {id, name, owner} = formData.value

  if (!id){
    const newId = crypto.randomUUID()

    const newEnterprise = {
      id: newId,
      name,
      owner
    }

    enterprises.value = [
      ...enterprises.value,
      newEnterprise
    ]
  }else{
    /*
    Tambien podemos buscar el objeto
    const enterprise = enterprises.value.find(enterprise => enterprise.id === id);
    enterprise.name = name;
    enterprise.owner = owner;
    */

    //busco el index dentro del arreglo
    const enterpriseIndexFound = enterprises.value.findIndex(enterprise => enterprise.id === id)

    enterprises.value[enterpriseIndexFound].name = name
    enterprises.value[enterpriseIndexFound].owner = owner
  }

  formData.value = { ...DEFAULT_FORM_DATA }
}

const onUpdate = (enterprise) => {
  formData.value = { ...enterprise }
}

const onPreviousDelete = (enterprise) => {
  isOpenDeleteModal.value = true
  selectedEnterprise.value = enterprise
}

const onDelete = () => {
  /*
    Tambien podemos filtrar el array y mostrar el array sin el objeto buscado
    const deleteEnterprice = enterprises.value.filter(enterprise => enterprise.id !== selectedEnterprise.value.id);
    enterprise.value = deleteEnterprice;
    */
  const enterpriseIndexFound = enterprises.value.findIndex(enterprise => enterprise.id === selectedEnterprise.value.id)
  enterprises.value.splice(enterpriseIndexFound, 1)
  toggleDeleteModal(9)
}

const toggleDeleteModal = () => {
  isOpenDeleteModal.value = false
}
</script>

<template>
  <div class="container">
    <nav>
      <ul>
        <li>Lista de empresas</li>
      </ul>
      <ul>
        <li>
          <button role="button" @click="onNewCompany">Nuevo company</button>
        </li>
      </ul>
    </nav>
    <div class="grid">
      <div>
        <table>
          <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Owner</th>
          </tr>
          </thead>
          <tbody v-if="formData.length">
          <tr>
            <td colspan="4">
              <div class="my">No records found!</div></td>
          </tr>
          </tbody>
          <tbody v-else>
          <tr v-for="(empresa, index) in enterprises" :key="empresa.id">
            <td>{{index + 1}}</td>
            <td>{{empresa.name}}</td>
            <td>{{empresa.owner}}</td>
            <td>
              <button role="button" class="flex" @click="onUpdate(empresa)">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill:#f7f4f4">
                  <path d="M19.045 7.401c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.378-.378-.88-.586-1.414-.586s-1.036.208-1.413.585L4 13.585V18h4.413L19.045 7.401zm-3-3 1.587 1.585-1.59 1.584-1.586-1.585 1.589-1.584zM6 16v-1.585l7.04-7.018 1.586 1.586L7.587 16H6zm-2 4h16v2H4z"/>
                </svg>
              </button>
            </td>
            <td>
              <button role="button" class="secondary" @click="onPreviousDelete(empresa)">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill:#f7f4f4">
                  <path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm4 12H8v-9h2v9zm6 0h-2v-9h2v9zm.618-15L15 2H9L7.382 4H3v2h18V4z"/>
                </svg>
              </button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h2>
          <span v-if="!formData.id">New enterprise</span>
          <span v-else>Edit enterprise {{ formData.name }}</span>
        </h2>
        <form @submit.prevent="onSubmit">
          <label>
            Nombre de empresa
            <input type="text" placeholder="Ex. Mi empresa" required v-model="formData.name" ref="formFieldName"/>
          </label>
          <label>
            Nombre de propietario
            <input type="text" placeholder="Ex. Jimy" required v-model="formData.owner"/>
          </label>
          <button type="submit">
            Guardar
          </button>
        </form>
      </div>
    </div>

    <dialog :open="isOpenDeleteModal">
      <article>
        <h3>Confirm your action!</h3>
        <p>
          ¿Are you sure you wnat to delete this enterprise?
        </p>
        <footer>
          <a href="#cancel" role="button" class="secondary" @click="toggleDeleteModal">Cancel</a>
          <a href="#confirm" role="button" @click="onDelete">Confirm</a>
        </footer>
      </article>
    </dialog>

  </div>
</template>

<style scoped>
.flex {
  display:flex;
  gap: .5rem;
}
.my {
  margin: 10rem;
}
</style>
