import axios from 'axios';

const BACKEND_URL =
    'http://192.168.1.13:3000/api';

export async function createBillboards(billboardData) {
    const response = await axios.post(BACKEND_URL + '/billboards', billboardData);
}
export async function getAllbillboards() {
    const response = await axios.get(BACKEND_URL + '/billboards');
}
export async function getBillboardsId(id) {
    const response = await axios.get(BACKEND_URL + `/billboards/${id}`);
}
export function updateBillboards(id, billboardData) {
    return axios.patch(BACKEND_URL + `/billboards/${id}`, billboardData);
}
export function deleteBillboards(id) {
    return axios.delete(BACKEND_URL + `/billboards/${id}`);
}

export async function createCities(citiesData) {
    const response = await axios.post(BACKEND_URL + '/cities', citiesData);
}
export async function getAllCities() {
    const response = await axios.get(BACKEND_URL + '/cities');
}
export async function getCitiesId(id) {
    const response = await axios.get(BACKEND_URL + `/cities/${id}`);
}
export function updateCities(id, citiesData) {
    return axios.put(BACKEND_URL + `/cities/${id}`, citiesData);
}
export function deleteCities(id) {
    return axios.delete(BACKEND_URL + `/cities/${id}`);
}

export async function createUsers(usersData) {
    const response = await axios.post(BACKEND_URL + '/users', usersData);
}
export async function getAllUsers() {
    const response = await axios.get(BACKEND_URL + '/users');
}
export async function getUsersId(id) {
    const response = await axios.get(BACKEND_URL + `/users/${id}`);
}
export function updateUsers(id, usersData) {
    return axios.patch(BACKEND_URL + `/users/${id}`, usersData);
}
export function deleteUsers(id) {
    return axios.delete(BACKEND_URL + `/users/${id}`);
}

export async function createRoles(rolesData) {
    const response = await axios.post(BACKEND_URL + '/roles', rolesData);
}
export async function getAllRoles() {
    const response = await axios.get(BACKEND_URL + '/roles');
}
export async function getRolesId(id) {
    const response = await axios.get(BACKEND_URL + `/roles/${id}`);
}
export function updateRoles(id, rolesData) {
    return axios.put(BACKEND_URL + `/roles/${id}`, rolesData);
}
export function deleteRoles(id) {
    return axios.delete(BACKEND_URL + `/roles/${id}`);
}

export async function createWards(wardsData) {
    const response = await axios.post(BACKEND_URL + '/wards', wardsData);
}
export async function getAllWards() {
    const response = await axios.get(BACKEND_URL + '/wards');
}
export async function getWardsId(id) {
    const response = await axios.get(BACKEND_URL + `/wards/${id}`);
}
export function updateWards(id, wardsData) {
    return axios.patch(BACKEND_URL + `/wards/${id}`, wardsData);
}
export function deleteWards(id) {
    return axios.delete(BACKEND_URL + `/wards/${id}`);
}

export async function createTransactions(transactionsData) {
    const response = await axios.post(BACKEND_URL + '/transactions', transactionsData);
}
export async function getAllTransactions() {
    const response = await axios.get(BACKEND_URL + '/transactions');
}
export async function getTransactionsId(id) {
    const response = await axios.get(BACKEND_URL + `/transactions/${id}`);
}
export function updateTransactions(id, transactionsData) {
    return axios.patch(BACKEND_URL + `/transactions/${id}`, transactionsData);
}
export function deleteTransactions(id) {
    return axios.delete(BACKEND_URL + `/transactions/${id}`);
}

export async function createSubscriptions(subscriptionsData) {
    const response = await axios.post(BACKEND_URL + '/subscriptions', subscriptionsData);
}
export async function getAllSubscriptions() {
    const response = await axios.get(BACKEND_URL + '/subscriptions');
}
export async function getSubscriptionsId(id) {
    const response = await axios.get(BACKEND_URL + `/subscriptions/${id}`);
}
export function updateSubscriptions(id, subscriptionsData) {
    return axios.patch(BACKEND_URL + `/subscriptions/${id}`, subscriptionsData);
}
export function deleteSubscriptions(id) {
    return axios.delete(BACKEND_URL + `/subscriptions/${id}`);
}

export async function createDistricts(districtsData) {
    const response = await axios.post(BACKEND_URL + '/districts', districtsData);
}
export async function getAllDistricts() {
    const response = await axios.get(BACKEND_URL + '/districts');
}
export async function getDistrictsId(id) {
    const response = await axios.get(BACKEND_URL + `/districts/${id}`);
}
export function updateDistricts(id, districtsData) {
    return axios.patch(BACKEND_URL + `/districts/${id}`, districtsData);
}
export function deleteDistricts(id) {
    return axios.delete(BACKEND_URL + `/districts/${id}`);
}