<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Popup Example</title>
    <style>
        /* Popup Styles */
        .popup {
            display: none; /* Initially hidden */
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            padding: 20px;
            background-color: white;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
            border-radius: 8px;
            z-index: 1000;
        }

        /* Overlay Styles */
        .overlay {
            display: none; /* Initially hidden */
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            z-index: 999;
        }

        /* Button Styles */
        .popup-button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            transition: background-color 0.3s ease;
        }

        .popup-button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>

    <!-- Button to trigger popup -->
    <button class="popup-button" onclick="showPopup()">Click to Show Popup</button>

    <!-- Popup Content -->
    <div class="overlay" id="overlay"></div>
    <div class="popup" id="popup">
        <h2>Welcome to the Popup!</h2>
        <p>This is a simple popup example.</p>
        <button class="popup-button" onclick="closePopup()">Close</button>
    </div>

    <script>
        // Function to show the popup
        function showPopup() {
            document.getElementById("popup").style.display = "block";
            document.getElementById("overlay").style.display = "block";
        }

        // Function to close the popup
        function closePopup() {
            document.getElementById("popup").style.display = "none";
            document.getElementById("overlay").style.display = "none";
        }
    </script>

</body>
</html>
