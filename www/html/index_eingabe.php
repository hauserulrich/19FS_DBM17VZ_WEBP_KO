<?php  
 if(isset($_POST["submit"]))  
 {  
      if(empty($_POST["name"]))  
      {  
           $error = "<label class='text-danger'>Fehlgeschlagen</label>";  
      }  
      else  
      {  
           if(file_exists('teams.json'))  
           {  
                $current_data = file_get_contents('teams.json');  
                $array_data = json_decode($current_data, true);
                $id = count($array_data) + 1;
                $extra = array(  
                     'id'                 =>     $id,
                     'name'               =>     $_POST['name'],  
                );
                $array_data[] = $extra;  
                $final_data = json_encode($array_data);  
                if(file_put_contents('teams.json', $final_data))  
                {  
                     $message = "<label class='text-success'>Team Eingefügt</p>";  
                }  
           }  
           else  
           {  
                $error = 'JSON Datei existiert nicht';  
           }  
      }  
 }  
 ?>  
 <!DOCTYPE html>  
 <html>  
      <head>
           <meta charset="UTF-8">
           <title>Teams Verwalten</title>  
           <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>  
           <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />  
           <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>  
      </head>  
      <body>  
           <br />  
           <div class="container" style="width:500px;">  
                <h3 align="">Teams verwalten</h3><br />                 
                <form method="post">  
                     <?php   
                     if(isset($error))  
                     {  
                          echo $error;  
                     }  
                     ?>  
            <br />

                     <label>Teamname</label>  
                     <input type="text" name="name" class="form-control" /><br />  
                     <input type="submit" name="submit" value="Submit" class="btn btn-info" /><br />                      
                     <?php  
                     if(isset($message))  
                     {  
                          echo $message;  
                     }  
                     ?>  
                </form>  
           </div>  
           <br />  
      </body>  
 </html>  