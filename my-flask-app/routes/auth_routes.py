from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from utils.file_storage import load_users, save_users

# Define a Blueprint for authentication routes
auth_bp = Blueprint("auth", __name__)

# Signup Route
@auth_bp.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    firstName = data.get("firstName")
    lastName = data.get("lastName")
    email = data.get("email")
    password = data.get("password")
    dateOfBirth = data.get("dateOfBirth")

    if not all([firstName, lastName, email, password, dateOfBirth]):
        return jsonify({
            "success": False, 
            "message": "All fields are required"
        }), 400

    users = load_users()

    if email in users:
        return jsonify({
            "success": False, 
            "message": "User already exists"
        }), 409

    # Store user data
    hashed_password = generate_password_hash(password)
    users[email] = {
        "firstName": firstName,
        "lastName": lastName,
        "password": hashed_password,
        "dateOfBirth": dateOfBirth
    }
    save_users(users)

    return jsonify({
        "success": True, 
        "message": "Signup successful!"
    })


# Login Route
@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({"success": False, "message": "Email and password are required"}), 400

    users = load_users()

    if email not in users:
        return jsonify({"success": False, "message": "Invalid email or password"}), 401

    # Get the stored password hash, handling both dictionary and string cases
    user_data = users[email]
    if isinstance(user_data, dict):
        stored_password = user_data['password']
    else:
        stored_password = user_data

    try:
        if check_password_hash(stored_password, password):
            return jsonify({"success": True, "message": "Login successful!"})
        else:
            return jsonify({"success": False, "message": "Invalid email or password"}), 401
    except Exception as e:
        print(f"Error checking password: {e}")  # For debugging
        return jsonify({"success": False, "message": "Invalid email or password"}), 401
