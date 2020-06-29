$(document).ready(function() {
    $("#value").hide();
    $("#des_title").hide();
});

$('#radioBtn a').on('click', function() {
    var sel = $(this).data('title');
    var tog = $(this).data('toggle');
    $('#' + tog).prop('value', sel);

    $('a[data-toggle="' + tog + '"]').not('[data-title="' + sel + '"]').removeClass('active').addClass('notActive');
    $('a[data-toggle="' + tog + '"][data-title="' + sel + '"]').removeClass('notActive').addClass('active');
})



$("#submit").click(function() {
    event.preventDefault();
    var I = 0,
        E = 0,
        S = 0,
        N = 0,
        T = 0,
        F = 0,
        J = 0,
        P = 0;

    //calculating different type
    $('#v1').val() == "i" ? I++ : E++;
    $('#v2').val() == "s" ? S++ : N++;
    $('#v3').val() == "t" ? T++ : F++;
    $('#v4').val() == "j" ? J++ : P++;

    $('#v5').val() == "i" ? I++ : E++;
    $('#v6').val() == "s" ? S++ : N++;
    $('#v7').val() == "t" ? T++ : F++;
    $('#v8').val() == "j" ? J++ : P++;

    $('#v9').val() == "i" ? I++ : E++;
    $('#v10').val() == "s" ? S++ : N++;
    $('#v11').val() == "t" ? T++ : F++;
    $('#v12').val() == "j" ? J++ : P++;

    $('#v13').val() == "i" ? I++ : E++;
    $('#v14').val() == "s" ? S++ : N++;
    $('#v15').val() == "t" ? T++ : F++;
    $('#v16').val() == "j" ? J++ : P++;

    $('#v17').val() == "i" ? I++ : E++;
    $('#v18').val() == "s" ? S++ : N++;
    $('#v19').val() == "t" ? T++ : F++;
    $('#v20').val() == "j" ? J++ : P++;

    //  alert(I +'I,E'+ E+';'+S +'S,N'+ N+';'+T +'T,F'+ F+";"+J +'J,P'+ P);

    // Including all of description
    var oms = {
        ISTJ: "Quiet, serious, earn success by thoroughness and dependability. Practical, matter-of-fact, realistic, and responsible. Decide logically what should be done and work toward it steadily, regardless of distractions. Take pleasure in making everything orderly and organized - their work, their home, their life. Value traditions and loyalty.",
        ISFJ: "Quiet, friendly, responsible, and conscientious. Committed and steady in meeting their obligations. Thorough, painstaking, and accurate. Loyal, considerate, notice and remember specifics about people who are important to them, concerned with how others feel. Strive to create an orderly and harmonious environment at work and at home.",
        INFJ: "Seek meaning and connection in ideas, relationships, and material possessions. Want to understand what motivates people and are insightful about others. Conscientious and committed to their firm values. Develop a clear vision about how best to serve the common good. Organized and decisive in implementing their vision.",
        INTJ: "Have original minds and great drive for implementing their ideas and achieving their goals. Quickly see patterns in external events and develop long-range explanatory perspectives. When committed, organize a job and carry it through. Skeptical and independent, have high standards of competence and performance - for themselves and others. ",
        ISTP: "Tolerant and flexible, quiet observers until a problem appears, then act quickly to find workable solutions. Analyze what makes things work and readily get through large amounts of data to isolate the core of practical problems. Interested in cause and effect, organize facts using logical principles, value efficiency. ",
        ISFP: "Quiet, friendly, sensitive, and kind. Enjoy the present moment, what's going on around them. Like to have their own space and to work within their own time frame. Loyal and committed to their values and to people who are important to them. Dislike disagreements and conflicts, do not force their opinions or values on others. ",
        INFP: "Idealistic, loyal to their values and to people who are important to them. Want an external life that is congruent with their values. Curious, quick to see possibilities, can be catalysts for implementing ideas. Seek to understand people and to help them fulfill their potential. Adaptable, flexible, and accepting unless a value is threatened.",
        INTP: "Seek to develop logical explanations for everything that interests them. Theoretical and abstract, interested more in ideas than in social interaction. Quiet, contained, flexible, and adaptable. Have unusual ability to focus in depth to solve problems in their area of interest. Skeptical, sometimes critical, always analytical.",
        ESTP: "Flexible and tolerant, they take a pragmatic approach focused on immediate results. Theories and conceptual explanations bore them - they want to act energetically to solve the problem. Focus on the here-and-now, spontaneous, enjoy each moment that they can be active with others. Enjoy material comforts and style. Learn best through doing.",
        ESFP: "Outgoing, friendly, and accepting. Exuberant lovers of life, people, and material comforts. Enjoy working with others to make things happen. Bring common sense and a realistic approach to their work, and make work fun. Flexible and spontaneous, adapt readily to new people and environments. Learn best by trying a new skill with other people.",
        ENFP: "Warmly enthusiastic and imaginative. See life as full of possibilities. Make connections between events and information very quickly, and confidently proceed based on the patterns they see. Want a lot of affirmation from others, and readily give appreciation and support. Spontaneous and flexible, often rely on their ability to improvise and their verbal fluency.",
        ENTP: "Quick, ingenious, stimulating, alert, and outspoken. Resourceful in solving new and challenging problems. Adept at generating conceptual possibilities and then analyzing them strategically. Good at reading other people. Bored by routine, will seldom do the same thing the same way, apt to turn to one new interest after another.",
        ESTJ: "Practical, realistic, matter-of-fact. Decisive, quickly move to implement decisions. Organize projects and people to get things done, focus on getting results in the most efficient way possible. Take care of routine details. Have a clear set of logical standards, systematically follow them and want others to also. Forceful in implementing their plans.",
        ESFJ: "Warmhearted, conscientious, and cooperative. Want harmony in their environment, work with determination to establish it. Like to work with others to complete tasks accurately and on time. Loyal, follow through even in small matters. Notice what others need in their day-by-day lives and try to provide it. Want to be appreciated for who they are and for what they contribute.",
        ENFJ: "Warm, empathetic, responsive, and responsible. Highly attuned to the emotions, needs, and motivations of others. Find potential in everyone, want to help others fulfill their potential. May act as catalysts for individual and group growth. Loyal, responsive to praise and criticism. Sociable, facilitate others in a group, and provide inspiring leadership.",
        ENTJ: "Frank, decisive, assume leadership readily. Quickly see illogical and inefficient procedures and policies, develop and implement comprehensive systems to solve organizational problems. Enjoy long-term planning and goal setting. Usually well informed, well read, enjoy expanding their knowledge and passing it on to others. Forceful in presenting their ideas."
    };

    var res = "";
    res += (E > I) ? "E" : "I";
    res += (S > N) ? "S" : "N";
    res += (T > F) ? "T" : "F";
    res += (P > J) ? "P" : "J";

    //Variable res contains 1 of the 16 personality types
    $("#res").text("Your type is " + res + ".");
    //display the values
    $("#IE").text("Introversion : " + I * 20 + "%  -- Extraversion : " + E * 20 + "% ");
    $("#SN").text("Sensing      : " + S * 20 + "%  -- Intuition    : " + N * 20 + "% ");
    $("#TF").text("Thinking     : " + T * 20 + "%  -- Feeling      : " + F * 20 + "% ");
    $("#JP").text("Perceiving   : " + P * 20 + "%  -- Judging      : " + J * 20 + "% ");

    $("#value").show();
    $("#overview").text(oms[res]);

    $('html, body').animate({
        scrollTop: ($('.results').offset().top)
    }, 2000);

});